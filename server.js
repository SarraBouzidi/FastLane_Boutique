import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//databse config
connectDB(); 

//middelwares
app.use(express.json());
app.use(morgan("dev"));
//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });

  //PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`.bgCyan.white);
  });
 