require('dotenv').config()
const express = require('express')
const app = express()
require('./db/connection')
const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log(`Server running on http://localhost:${PORT}`);
})