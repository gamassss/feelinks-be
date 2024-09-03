import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()
console.log(process.env)
const app: Express = express()
const port = 5000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server started on port 5000`)
})