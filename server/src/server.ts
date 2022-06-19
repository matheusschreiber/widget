import express from "express"
import 'dotenv/config'

const app = express();

app.listen(process.env.PORT || 3333, ()=>console.log("Listening on port " + process.env.PORT))