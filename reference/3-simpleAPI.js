const express = require('express');
const path = require('path')
const app = express();
const {products} = require('./reference/data')


app.get('/', (req,res) =>{
    res.json(products)
})

app.listen(5000, () => {
    console.log(`server runnning on http://localhost:5000`)
})