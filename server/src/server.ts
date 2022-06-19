import express from "express"
import 'dotenv/config'
import { routes } from "./routes";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(process.env.PORT || 3333, () => {
    console.log("Listening on port " + process.env.PORT)
})