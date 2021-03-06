/* eslint global-require: [0] no-console: [0] no-var: [0] import/no-unresolved: [0] */

var app

if (process.env.NODE_ENV === 'production') {
  app = require('./dist/server')
} else {
  app = require('./build/')
}

Promise.resolve(app.main()).then(() => {
  console.log('Application is running.')
}).catch((e) => {
  console.error(e.stack)
})
