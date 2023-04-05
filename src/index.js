require("./db/conn");
require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const newsRouter = require("./routers/news");
const weatherRouter = require("./routers/weather");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(userRouter);    
app.use("/news", newsRouter);
app.use("/weather", weatherRouter);

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});