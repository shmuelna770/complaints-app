import express from 'express'
import { config } from 'dotenv'

config()
const app = express()

app.use(express.static())
const PORT = process.env.PORT || 3047

app.listen(PORT,()=>{
    console.log(`server running on: http://localhost:${PORT}`);
    
})