require('dotenv').config()
const express = require('express')
const app = express()
require('./db/connection')
const PORT = process.env.PORT
const productRoutes = require('./routes/productRoutes')


app.use(express.json())
app.use(productRoutes)

app.get('/', (req,res)=>{
    console.log('API running');
    res.send('API running')
    
})
app.get('/', (req,res)=>{
    console.log('API running');
    res.send('API running')
    
})

app.listen(PORT, ()=>{console.log(`Server running on http://localhost:${PORT}`);
})