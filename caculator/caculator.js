const express = require("express");
const app = express();
app.get('/', function(req,resp){
  resp.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,resp){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var c = num1 + num2;
  resp.send('The value of caculation is '+c)
})
app.listen(3000,function(){
  console.log("Server is running at 3000")
});
