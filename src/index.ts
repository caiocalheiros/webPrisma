import express, { Request, Response } from "express";
import router from "./routes";


const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("", router)


app.listen(port, () => {
    console.log(`Servidor está rodando na -> http://localhost:${port}`)
})

export default app
