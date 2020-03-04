require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cards = require('./routes/cards');
const users = require('./routes/users');
const pages = require('./routes/pages');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/users');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.post('/signin', login);
app.post('/signup', createUser);
app.use(auth);
app.use('/cards', cards);
app.use('/users', users);
app.use('*', pages);
app.listen(PORT);
