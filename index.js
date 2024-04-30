const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(express.static("public"));

app.get('*', (req, res) => {
    let url = req.url;
    if (url === '/') {
      res.sendFile(__dirname + '/index.html');
    } else if (url === '/contact') {
      res.sendFile(__dirname + '/public/contact.html');
    } else if (url === '/warranty') {
      res.sendFile(__dirname + '/public/warranty.html');
    } else if (url === '/blog') {
      res.sendFile(__dirname + '/public/blog.html');
    } else if (url === '/matteppf') {
      res.sendFile(__dirname + '/public/matteppf.html');
    } else if (url === '/clearppf') {
      res.sendFile(__dirname + '/public/clearppf.html');
    } else {
      res.sendFile(__dirname + '/public/404.html');
    }
  });
  

app.listen(process.env.PORT, () => console.log("Server listening on http://localhost:" + process.env.PORT));