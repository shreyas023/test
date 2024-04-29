const express = require("express");
const port = 5000;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => console.log("Server listening on http://localhost:" + port));