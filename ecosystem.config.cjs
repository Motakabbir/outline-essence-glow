module.exports = {
  apps: [
    {
      name: 'vision148',
      script: 'server-entry.mjs',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
        PORT: '3030',
      },
    },
  ],
};
