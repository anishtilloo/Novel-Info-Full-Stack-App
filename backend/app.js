import dotenv from 'dotenv';

// import packages or dependencies
import express from "express";
import cors from "cors";
import path from "path";

// import local files
import connectDB from "./db/connection.js";
import NovelRoute from "./routes/novel.route.js";
import SendEmails from "./routes/email.route.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// middlewares
app.use(cors());
app.use(express.static(path.resolve('./uploads')));


// db connection code
connectDB(DATABASE_URL);

app.use(express.json());

// Load Routes
app.use("/api", NovelRoute);
app.use("/api", SendEmails);
// Define authentication routes
app.use('/api/auth', authRoutes);

// Define user routes
app.use('/api/user', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})