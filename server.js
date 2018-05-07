const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
///trying to link to jQuery on html page
const survey = require("./public/survey.html");

const app = express();
const PORT = process.env.PORT || 3000;

// let userChoice = [
// ];

const wine = [

    {
        type: "Cabernet Franc",
        p1: "Red",
        p2: "Dry",
        p3: "Peppery and Smokey",
        p4:  "Yes"
        

    },
    {
        type: "Brut",
        p1: "Sparkling",
        p2: "Dry",
        p3: "Light and Fruity",
        p4: "Yes"
    }

];

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.post("/saveData", function (req, res) {
    console.log("hit it", req.body);
    //logic for pairing
    var choice1 = input[0];
    var choice2 = input[1];
    var choice3 = input[2];
    var choice4 = input[3];

    console.log("wino")


    res.json("what")
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

 // var best = {
    //     test: "wine"
    // }