const express = require('express');
const app = express();

app.use(express.json());  
app.use(express.static('./public'))

// parse form data 
app.use(express.urlencoded({extended: false}))

app.post('/login', (req, res)=>{
    console.log(req.body)
    const {name} = req.body;
    if (name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.end('please provide name')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
