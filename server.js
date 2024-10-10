// require('dotenv').config();
const express = require('express')
const cors = require('cors')
const PORT = 3000;
const app = express();



app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({message: "Default route is working fine"})
})

app.listen(PORT, () => {
    console.log(`GPay API server is running on PORT: ${PORT}`)
})