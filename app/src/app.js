import  Express  from "express";
import {} from 'dotenv/config'
import data from "./fetchingData.js";
import  CorsOptions  from "cors";

const dataUser = await data();
const PORT = process.env.PORT;
const app = Express()

app.use(CorsOptions())
app.get('/',((req,res) =>{ 
  res.send(dataUser)
}))

app.listen(PORT, ()=>{
  console.log(`Listening on port http://localhost:${PORT}`)
}) 
