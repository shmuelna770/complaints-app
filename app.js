import express from 'express'
import { config } from 'dotenv'
import {complaintRoutes} from './routes/complaints.js'
config()
const app = express()

app.use(express.static("./public"))
app.use(express.json())
app.use('/submit',complaintRoutes)

const PORT = process.env.PORT || 3047

app.listen(PORT,()=>{
    console.log(`server running on: http://localhost:${PORT}`);
    
})