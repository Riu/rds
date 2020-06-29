const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const expressNunjucks = require('express-nunjucks')
const fs = require('fs')

const app = express()

expressNunjucks(app, {
  watch: true,
  noCache: true
})

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('views'), {
  autoescape: false
});

env.express(app)
markdown.register(env, marked)
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => { res.redirect('docs') })
app.get('/docs', (req, res, next) => { 
  const data = fs.readFileSync(`./README.md`, {encoding:'utf8', flag:'r'}); 
  res.render('docs/index', { html: data })
})
app.get('/docs/:module', (req, res, next) => {
  const module = req.params.module
  const data = fs.readFileSync(`./rds/${module}/README.md`, {encoding:'utf8', flag:'r'}); 
  res.render('docs/module', { html: data })
})

app.get('/docs/:module/:component', (req, res, next) => {
  const module = req.params.module
  const component = req.params.component
  const data = fs.readFileSync(`./rds/${module}/${component}/README.md`, {encoding:'utf8', flag:'r'})
  res.render('docs/component', { html: data })
})

app.listen(3000, () => {
  console.log('Start aplikacji na porcie 3000')
})
