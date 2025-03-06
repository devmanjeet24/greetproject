import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";
const PORT = process.env.PORT || 5000;
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use("/api/greet", router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});