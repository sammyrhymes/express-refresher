const express = require('express');
const app = express();

app.use(express.json());  


app.post('/daraja-callback', (req, res) => {
    const callbackData = req.body;  

    console.log('Received Callback Data:', callbackData);

    res.status(200).json({
        message: 'Callback received successfully'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
