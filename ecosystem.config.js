module.exports = {
  apps: [{
    name: 'herramienta-web-payload',
    script: 'node',
    args: '.next/standalone/server.js',
    cwd: '/var/www/herramienta-web-payload',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      HOSTNAME: '0.0.0.0',
      PORT: '3000',
      DATABASE_URI: '',
      PAYLOAD_SECRET: 'supersecret',
      NEXT_PUBLIC_SERVER_URL: 'https://',
      CRON_SECRET: 'supersecret',
      PREVIEW_SECRET: 'supersecret'
    }
  }]
}

