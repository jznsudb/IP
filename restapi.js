var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send("Get Method Received")
})

app.put('/', (req, res) => {
    res.send("Put Method Received")
})

app.post('/', (req, res) => {
    res.send("Post Method Received")
})

app.delete('/', (req, res) => {
    res.send("Delete Method Received")
})

app.listen(3000, ()=> console.log("Server Started"))