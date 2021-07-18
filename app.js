const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  var a=3;
  var b=6;
 let c=a+b;
 return res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})