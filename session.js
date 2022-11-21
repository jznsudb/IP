var express = require('express');
var session = require('express-session')
var cookie = require('cookie-parser')

var app = express()

app.use(session({secret:"secret"}))
app.use(cookie())

const user = {
    name: "Ayush",
    age: 19
}

app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("User Logged in");
})

app.get("/user", (req, res) => {
    const userdetail = req.session.user;
    return res.send('User Name is '+userdetail.name);
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("User Logged out");
})

app.listen(3000, ()=> console.log('SERVER AT '+3000));