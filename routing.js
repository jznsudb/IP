var express = require('express');

var app = express();
 
var router1 = express.Router();
var router2 = express.Router();
    
router1.get('/user', function (req, res) {
    res.send("User Router Working");
});
  
router2.get('/admin', function (req, res) {
    res.send("Admin Router Working")
});
 
app.use(router1);
app.use(router2);

app.listen(8080, () => {
    console.log("Server is Started");
})