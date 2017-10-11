import express from 'express';
import bodyParser from 'body-parser'

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', express.static('dist'));

app.listen(process.env.PORT || 3000);