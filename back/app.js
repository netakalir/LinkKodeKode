import express from "express";
import cors from "cors"
import configRoutes from "./routs/configRoutes.js";


const app = express()
app.use(express.json()) 
app.use(cors())
app.use(express.static('public'))
configRoutes(app)

app.listen(4010, () => {
    console.log("listening on port 4010");
})