const express = require('express');
const path = require('path')
const app = express();
const {products} = require('./reference/data')


app.get('/', (req,res) =>{
    res.send('<h1>hello</h1><br><a href="/api/products">api</a>')
})

app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, productName, price} = product
        return {id, productName, price}
    })
    res.json(newProducts)
})

// app.get('/api/products/1', (req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })

app.get('/api/products/:productID', (req,res)=>{
    
    // console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send('Product doesnt exist')
    }
    res.json(singleProduct)
})

app.get('/api/v1/query', (req,res) =>{
    let sortedProducts = [...products]
    // console.log(req.query)              
    const {search, limit} = req.query
    if (search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.productName.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length >1){
        return res.status(200).json({succes: true, data: []})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log(`server runnning on http://localhost:5000`)
})