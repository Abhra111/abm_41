const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Abhradip')
})

app.get('/courses', function (req, res) {
  res.send('Print all courses')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
