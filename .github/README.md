# Despliegue a Droplet (CI) con túnel SSH a PostgreSQL (DO)

Este proyecto se construye en GitHub Actions y despliega únicamente los artefactos de build (`.next` y `public`) al Droplet. Durante el build en CI se abre un TÚNEL SSH al PostgreSQL gestionado de DigitalOcean para permitir que Next/Payload consulten datos cuando sea necesario (por ejemplo en `generateStaticParams`/`generateMetadata`).

## ¿Por qué es necesario el túnel?
- Los runners de GitHub no están en tu VPC ni en la lista de “Trusted sources” de tu DB de DO.
- El túnel redirige `127.0.0.1:5432` del runner hacia `DB_HOST:DB_PORT` pasando por el Droplet (que sí está en “Trusted sources”).
- Así el build puede acceder a Postgres sin exponer la DB públicamente.

## Flujo del workflow
1. CI (GitHub Actions)
   - `npm install`
   - Abre túnel SSH: `127.0.0.1:5432 -> ${DB_HOST}:${DB_PORT}` via `${SSH_USER}@${SSH_HOST}`
   - `npm run build` con `DATABASE_URI=${{ secrets.DATABASE_URI_TUNNEL }}`
   - Cierra túnel
   - Copia `.next/` y `public/` al Droplet vía `scp`
2. Droplet
   - Carga `.env` (ya presente en `${REMOTE_PATH}`)
   - `npm ci || npm install`
   - `npm run payload -- migrate` (ignora si no hay pendientes)
   - Mata proceso anterior (por PID/puerto) y arranca `npm start` en background (guarda `run.pid`)
   - `systemctl reload nginx` (si está presente)

## Ramas y disparadores
- El workflow se ejecuta con `push` a `deploy-do` y `workflow_dispatch` (manual).

## Secrets requeridos (Settings → Secrets and variables → Actions)
- Deploy/SSH:
  - `SSH_HOST` (IP o dominio del Droplet)
  - `SSH_USER` (p. ej. `ubuntu`)
  - `SSH_PORT` (p. ej. `22`)
  - `SSH_KEY` (clave privada PEM del usuario SSH)
  - `REMOTE_PATH` (p. ej. `/var/www/herramienta-web-payload`)
- Build/Next/Payload:
  - `NEXT_PUBLIC_SERVER_URL` (p. ej. `https://tu-dominio.com` o `http://IP:3000`)
  - `PAYLOAD_SECRET` (secreto aleatorio largo)
  - `PREVIEW_SECRET` (opcional)
  - `CRON_SECRET` (opcional)
  - `NODE_OPTIONS` (opcional, p. ej. `--no-deprecation`)
- Túnel a DO Postgres:
  - `DB_HOST` (host de la DB de DO, p. ej. `db-xxxx-do-user-...ondigitalocean.com`)
  - `DB_PORT` (opcional; por defecto `25060`)
  - `DATABASE_URI_TUNNEL` (URI con host local del runner):
    - Ejemplo:
      ```
      postgres://USER:PASSWORD@127.0.0.1:5432/DBNAME?sslmode=require
      ```

Importante: añade el Droplet a “Trusted sources” de tu base de datos gestionada en DO (Proyecto → Databases → Settings → Trusted sources).

## Requisitos en el Droplet (una vez)
- Node.js 22, npm
- Nginx como reverse proxy (opcional)
- `.env` en `${REMOTE_PATH}` con:
  - `DATABASE_URI=postgres://USER:PASSWORD@HOST:PORT/DB?sslmode=require`
  - `PAYLOAD_SECRET=...`
  - `NEXT_PUBLIC_SERVER_URL=https://tu-dominio.com` (o `http://IP:3000`)
- UFW: abrir `22`, `80`, `443` (y `3000` sólo para pruebas)

## Comprobación tras deploy
- App:
  - `tail -n 200 -f ${REMOTE_PATH}/logs/app.out.log`
  - `cat ${REMOTE_PATH}/run.pid && ps -p $(cat ${REMOTE_PATH}/run.pid)`
- Nginx:
  - `sudo systemctl status nginx --no-pager`

## Solución de problemas
- `ECONNREFUSED 127.0.0.1:5432` en CI:
  - Verifica `DB_HOST`, `DB_PORT` (25060), `SSH_*` y que el Droplet esté en “Trusted sources”.
  - Revisa que el paso “Open SSH tunnel…” se ejecute sin errores.
  - La URI `DATABASE_URI_TUNNEL` debe apuntar a `127.0.0.1:5432` y usar `sslmode=require`.
- Permisos/SSH:
  - `SSH_KEY` debe ser una clave privada válida del usuario del Droplet.
  - Prueba localmente: `ssh -i ~/.ssh/clave.pem ubuntu@IP "echo OK"`
- App no arranca:
  - Revisa `${REMOTE_PATH}/logs/app.out.log`
  - Asegúrate de que `.env` existe y contiene `DATABASE_URI` y `PAYLOAD_SECRET`.

## Ejecución manual
Desde GitHub → Actions → “Build and Deploy (Artifacts → Droplet)” → Run workflow → rama `deploy-do`.


