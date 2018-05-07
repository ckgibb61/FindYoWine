const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let wine = [

    {
        type: "Cabernet Franc",
        options: [
            "1",
            "2",
            "4"
        ]

    },
    {
        type: "Brut",
        options: [
            "3",
            "2",
            "1"
        ]
    }

];

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});