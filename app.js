const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const viewRouter = require('./Router/viewRouter');
const app = express();

dotenv.config({ path: 'config.env' });
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));

app.use('/', viewRouter);
app.all('*', (req, res) => {
  res.status(404).render('Error', {
    title: 'Error | 404',
  });
});

module.exports = app;
