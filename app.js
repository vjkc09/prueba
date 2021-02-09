const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 3000



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(resp) {
            //res.json(resp.data);
            console.log(resp.data);
        }).catch(function(error) {
            res.json("error en peticion");
        })
})


app.post('/', (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(resp) {
            //res.json(resp.data);
            console.log(resp.data);
        }).catch(function(error) {
            res.json("error en peticion");
        })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})