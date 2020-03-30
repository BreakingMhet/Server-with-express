
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) //prima request e poi response
{
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res)
{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result is " + result);
});

app.post("/bmicalculator", function(req, res)
{
    var wh = Number(req.body.wh);
    var ht = Number(req.body.ht);
    var bmi = Math.round(wh/(ht*ht));

    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server running on port 3000");
});