const BS = require('browser-sync')
const path = require('path')

const config = {
  server: {
    baseDir: path.join(process.cwd(), 'public'),
  },
  port: 3001,
  timestamps: false,
  files: 'public/**/*',
  open: false,
  reloadOnRestart: true,
}

BS(config)
