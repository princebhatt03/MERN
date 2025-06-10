// For Setup EJS;
// 1. install EJS
// 2. Configure EJS
// 3. app.set("view engine", "ejs")
// 4. Make a Folder name it "views"
// 5. Make EJS file in it (.ejs)
// 6. Replace send from send (app.send -> app.render)

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(3000);
