import express from "express";
import greetfile from "../controller/contoller.js";

const router = express.Router();


router.get("/", greetfile);

export default router;