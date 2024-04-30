const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get('/warranty', (req, res) => {    
    res.sendFile(__dirname + "/public/warranty.html");
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/public/blog.html");
});

app.get('/matteppf', (req, res) => {
    res.sendFile(__dirname + "/public/matteppf.html");
});

app.get('.clearppf', (req, res) => {
    res.sendFile(__dirname + "/public/clearppf.html");
});

app.listen(process.env.PORT, () => console.log("Server listening on http://localhost:" + process.env.PORT));