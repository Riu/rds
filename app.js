const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const expressNunjucks = require('express-nunjucks')

const app = express()
app.set('views', 'views')
expressNunjucks(app, {
  watch: true,
  noCache: true
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => { res.redirect('docs') })
app.get('/docs', (req, res, next) => { res.render('docs/index') })

app.listen(3000, () => {
  console.log('Start aplikacji na porcie 3000')
})
