# ---- build (React SPA: CRA/Vite/Next export) ----
FROM node:22-alpine AS build
WORKDIR /app

# instala deps
COPY package*.json ./
RUN npm ci

# copia código e faz build
COPY . .
# ajusta caso uses um script diferente (ex.: "build": "vite build")
RUN npm run build

# normaliza a saída para /out (aceita dist/ ou build/)
RUN mkdir -p /out && \
    if [ -d "dist" ]; then cp -r dist/* /out/; \
    elif [ -d "build" ]; then cp -r build/* /out/; \
    else cp -r * /out/; fi

# ---- runtime (Caddy a servir estático) ----
FROM caddy:2-alpine
# Caddy serve /usr/share/caddy por defeito (porta 80 no container)
COPY --from=build /out /usr/share/caddy