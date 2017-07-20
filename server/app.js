const express      = require('express'),
      bodyParser   = require('body-parser'),
      mongoose     = require('mongoose')

      articles        = require('./routes/article'),
      users    = require('./routes/users')

      app          = express();
      cors         = require('cors')
mongoose.connect('mongodb://localhost/hacktivpress-andrew')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// app.use('/', index)
app.use('/articles', articles)
app.use('/users', users)

app.listen(3000, () => {
  console.log('server listens');
})