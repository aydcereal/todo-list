const express = require("express")
const bodyParser = require("body-parser")

const app = express();
var item=[];

app.use(bodyParser.urlencoded ({extended:true}))
app.use(express.static('public'))
app.set('view engine', "ejs");


app.get('/', function(req, res) {
    
    var today = new Date();
    
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render('list',{day: day,newItem: item})
  });

  app.post("/", function(req, res){
    item.push(req.body.newItem)

    res.redirect("/")
  })


app.listen(3000);
console.log('Server is listening on port 3000');