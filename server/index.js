import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import commentRoutes from './routes/comment.js';
import authRoutes from './routes/auth.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";


const app = express()
dotenv.config();

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'", "blob:"],
            "style-src": ["'self'", "'unsafe-inline'"],
            "img-src": ["'self'", "data:"],
            "connect-src": ["'self'", "http://localhost:8000"],
            "media-src": ["'self'", "blob:"],
            "frame-src": ["'self'"]
        }
    }
}));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})

const connect = () => {
    mongoose.connect(process.env.MONGODB).then(() => {
        console.log("connected to db");
    }).catch((error) => {
        console.log("There is  a error while connecting to the db", error);
    })
}

app.listen(8000, (req, res) => {
    connect();
    console.log("connected to the port 8000");
})


