#!/usr/bin/env bash
# Launch Sandra Website (Vite) for verification. Writes PID/port to .run/state.env.
set -euo pipefail

SKILL_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPO_ROOT="$(cd "$SKILL_DIR/../../.." && pwd)"
RUN_DIR="${VERIFY_RUN_DIR:-$SKILL_DIR/.run}"
PORT="${VERIFY_PORT:-5193}"
HOST="${VERIFY_HOST:-127.0.0.1}"
BASE_PATH="/sandra-website/"
LOG_FILE="$RUN_DIR/vite.log"
STATE_FILE="$RUN_DIR/state.env"
READY_TIMEOUT_SEC="${VERIFY_READY_TIMEOUT_SEC:-90}"
READY_URL="http://${HOST}:${PORT}${BASE_PATH}"

mkdir -p "$RUN_DIR"

if [[ -f "$STATE_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$STATE_FILE"
  if [[ -n "${PID:-}" ]] && kill -0 "$PID" 2>/dev/null; then
    echo "Already running: pid=$PID url=${READY_URL} (refuse to double-launch)"
    exit 0
  fi
  rm -f "$STATE_FILE"
fi

cd "$REPO_ROOT"

if command -v lsof >/dev/null 2>&1; then
  if lsof -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    echo "Port $PORT is already in use by something else. Set VERIFY_PORT to another port."
    exit 1
  fi
fi

echo "Starting Vite on ${READY_URL} ..."
# bun run start → vite --host 0.0.0.0; pass port/strictPort through.
nohup bun run start -- --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 &
PID=$!

cat >"$STATE_FILE" <<STATE
PID=$PID
PORT=$PORT
HOST=$HOST
BASE_PATH=$BASE_PATH
REPO_ROOT=$REPO_ROOT
SKILL_DIR=$SKILL_DIR
STARTED_AT=$(date -u +%Y-%m-%dT%H:%M:%SZ)
LOG_FILE=$LOG_FILE
STATE
echo "Wrote $STATE_FILE (pid=$PID)"

deadline=$((SECONDS + READY_TIMEOUT_SEC))
while (( SECONDS < deadline )); do
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "Vite exited early. Last log lines:"
    tail -n 40 "$LOG_FILE" || true
    rm -f "$STATE_FILE"
    exit 1
  fi
  if curl -fsS "$READY_URL" >/dev/null 2>&1; then
    echo "Ready: $READY_URL"
    exit 0
  fi
  sleep 1
done

echo "Timed out waiting for ${READY_URL} after ${READY_TIMEOUT_SEC}s"
tail -n 60 "$LOG_FILE" || true
kill "$PID" 2>/dev/null || true
rm -f "$STATE_FILE"
exit 1
