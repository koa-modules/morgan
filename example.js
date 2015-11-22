const fs = require('fs')
const Koa = require('koa')
const morgan = require('../')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',
                                             { flags: 'a' })
const app = new Koa()

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use((ctx) => {
  ctx.body = 'hello, world!'
})

app.listen(2333)
