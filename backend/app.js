// import packages or dependencies
import express from "express";
import cors from "cors";

// import local files
import connectDB from "./db/connection.js";
import NovelRoute from "./routes/novel.route.js"

const app = express();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// middlewares
app.use(cors());

// db connection code
connectDB(DATABASE_URL);

app.use(express.json());

// Load Routes
app.use("/api", NovelRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})