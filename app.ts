import express,{Express,Request,Response} from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT||8080;
app.get("/",(req:Request,res:Response)=>{
res.send("Bienvenido a mi API RESTFULL: EXPRESS+ Nodemon+ Jest + TypeScript + SWAGGER + Mongoose");
});

app.listen(PORT,()=>{

console.log("Servidor corriendo en el puerto 8080⚡")
})