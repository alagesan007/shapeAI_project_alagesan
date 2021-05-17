const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");

})




app.post("/", function(req, res){
    const months = ["so cute", "so pretty", "so sexy", "titanic jack and rose", "so wow..!!", "its crazy", "very funny"];

    const random = Math.floor(Math.random() * months.length);
    var result = (random, months[random]);
    res.send("your pair is - "+result);
});

app.listen(3000, function(){
    console.log("server has been started on 3000 port");
});