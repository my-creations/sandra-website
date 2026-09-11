#!/usr/bin/env bash
# Read-only health check for the verification instance started by launch.sh.
set -euo pipefail

SKILL_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RUN_DIR="${VERIFY_RUN_DIR:-$SKILL_DIR/.run}"
STATE_FILE="$RUN_DIR/state.env"
BODY_FILE="${TMPDIR:-/tmp}/sandra-website-doctor-body.html"

if [[ ! -f "$STATE_FILE" ]]; then
  echo "FAIL: no state file at $STATE_FILE (run scripts/launch.sh first)"
  exit 1
fi

# shellcheck disable=SC1090
source "$STATE_FILE"

ok=1
BASE_PATH="${BASE_PATH:-/sandra-website/}"

if [[ -z "${PID:-}" ]] || ! kill -0 "$PID" 2>/dev/null; then
  echo "FAIL: process PID=${PID:-unset} is not running"
  ok=0
else
  echo "OK: process pid=$PID alive"
fi

URL="http://${HOST:-127.0.0.1}:${PORT}${BASE_PATH}"
code="$(curl -fsS -o "$BODY_FILE" -w "%{http_code}" "$URL" || true)"
if [[ "$code" == "200" ]]; then
  echo "OK: $URL → 200"
  if grep -qi 'Sandra Camilo\|sandra-website\|root' "$BODY_FILE"; then
    echo "OK: response body looks like the Sandra shell"
  else
    echo "WARN: 200 but body does not look like Sandra — check base path / wrong app"
  fi
else
  echo "FAIL: $URL not healthy (HTTP ${code:-none})"
  ok=0
fi

if [[ -f "${REPO_ROOT:-}/package.json" ]] && grep -q '"name": "sandra-website"' "${REPO_ROOT}/package.json"; then
  echo "OK: package.json name is sandra-website"
else
  echo "FAIL: REPO_ROOT package.json is not sandra-website"
  ok=0
fi

echo "NOTE: verification Launch uses Vite at ${BASE_PATH} with HashRouter (#/…); live Pages is https://my-creations.github.io/sandra-website/"

if [[ "$ok" -ne 1 ]]; then
  exit 1
fi
echo "Doctor passed for $URL"
