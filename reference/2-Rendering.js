const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('./public'))

// app.get('/', (res,req) =>{
//     res.sendFile(path.resolve(__dirname, './nav-bar/index.html'))

// })


app.listen(5000, () => {
    console.log(`server runnning on http://localhost:5000`)
})