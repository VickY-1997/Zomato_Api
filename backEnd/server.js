import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoute from './routes/authRoute.js'
import zomRoute from './routes/zomRoute.js'
import {dbConnect} from './db.js'
// import {protectRoute} from './middleware/protectRoute.js'
import cors from 'cors'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 2024

app.use(cors()); 
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/zomapp',  zomRoute)

app.listen(PORT, (err) => {
    dbConnect()
    if(err) throw err;
    console.log(`The server is running on port ${PORT}`)
})