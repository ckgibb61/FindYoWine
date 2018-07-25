const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
///trying to link to jQuery on html page
// const survey = require("./public/survey.html");

const app = express();
const PORT = process.env.PORT || 3000;

// let userChoice = [
// ];

const wine = [

    {
        type: "Merlot",
        p1: "Red",
        p2: "Fruity",
        p3: "Medium Body",
        p4:  "Red Berry",
        p5: "Woody and Vanilla"
        
    },
    {
        type: "Cabernet Sauvigon",
        p1: "Red",
        p2: "unsure",
        p3: "Full Body",
        p4: "Dark Berry",
        p5: "Peppery and Rich"
    },
    {
        type: "Syrah",
        p1: "Red",
        p2: "Earthy",
        p3: "Full Body",
        p4: "Dark Berry",
         p5: "Herbal and Oaky"
    },
    {
        type: "Pinot Noir",
        p1: "Red",
        p2: "Earthy",
        p3: "Light Body",
        p4: "Red Berry",
        p5: "Woody and Vanilla"
    },
    {
        type: "Malbec",
        p1: "Red",
        p2: "Fruity",
        p3: "Full Body",
        p4: "Dark Berry",
        p5: "Peppery and Rich"
    },
    {
        type: "Chianti",
        p1: "Red",
        p2: "Earthy",
        p3: "Medium Body",
        p4: "Red Berry",
        p5: "Herbal and Oaky"
    },
    {
        type: " PetitenSyrah",
        p1: "Red",
        p2: "unsure",
        p3: "Medium Body",
        p4: "Dark Berry",
        p5: "Peppery and Rich"
    },
    {
        type: "Moscato",
        p1: "White",
        p2: "Fruity",
        p3: "Light Body",
        p4: "Dark Berry",
        p5: "Honey and Floral"
    },
    {
        type: "Chardonay",
        p1: "White",
        p2: "Fruity",
        p3: "Medium Body",
        p4: "Pome",
        p5: "Woody and Vanilla"
    },
    {
        type: "Riesling",
        p1: "White",
        p2: "Fruity",
        p3: "Light Body",
        p4: "Pome",
        p5: "Honey and Floral"
    },
    {
        type: "Pinot Grigio",
        p1: "White",
        p2: "unsure",
        p3: "Light Body",
        p4: "Citrus",
        p5: "Honey and Floral"
    },
    {
        type: "Pinot Gris",
        p1: "White",
        p2: "Fruity",
        p3: "unsure",
        p4: "Citrus",
        p5: "Zesty and Spicy"
    },
    {
        type: "Sauvignon Blanc",
        p1: "White",
        p2: "Fruity",
        p3: "Light Body",
        p4: "Citrus",
        p5: "Zesty and Spicy"
    },
    {
        type: "Garnacha",
        p1: "Rose",
        p2: "Fruity",
        p3: "Light Body",
        p4: "Citrus",
        p5: "Zesty and Spicy"
    },
    {
        type: "Sauvignon Blanc",
        p1: "White",
        p2: "Fruity",
        p3: "Medium Body",
        p4: "Red Berry",
        p5: "clove and Caramel"
    }
   


];

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});
app.use(express.static("public"));

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.post("/saveData", function (req, res) {
    console.log("hit it", req.body);
    //logic for pairing
    
// for (j = 0; j < input.length; j++) {
//     input[j];  

    //for in loop

    for (i=0; i < wine.length; i++) {
        console.log(wine[i]);
        // if (req.body.q1 == "Red") {
        //     // console.log("red")
        // }
        if (req.body.q1 == wine[i].p1 && req.body.q2 == wine[i].p2 && req.body.q3 == wine[i].p3 && req.body.q4 == wine[i].p4 && req.body.q5 == wine[i].p5) {
            console.log(wine[i].type)
            //append wine type to page
            // $("#result").append("Try sipping on a" + wine[i].type);
        } else {
            console.log("No wine for you!!")
        }
    }




    console.log("wino")
// req.body

    res.json("what")
// };
});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


