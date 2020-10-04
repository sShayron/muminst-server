import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { mumbleClient } from './mumbleService'

dotenv.config()

const port = process.env.PORT
const corsOptions = {
    origin: 'http://localhost.com:3000',
    optionsSuccessStatus: 200,
}

const app = express()
app.use(cors())

app.get('/', (_, res) => {
    res.send('Hello World!')
})

app.get('/current-channel', (_, res) => {
    res.json(mumbleClient.getCurrentChannel())
})

app.get('/channels', (_, res) => {
    res.json(mumbleClient.getChannels())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
