import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.listen(8800, () => {
    console.log("Backend server is running!");
    }
);