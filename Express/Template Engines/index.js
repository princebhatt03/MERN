const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  throw Error('Error Aagaya');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/error', (req, res) => {
  throw Error('404');
});
app.use(function errorHandlers(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error');
});

app.listen(3000);
