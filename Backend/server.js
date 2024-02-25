const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connection = require("./config/db.connection");
const userRouter = require("./routes/user.router");
const todoRouter = require("./routes/todo.router");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users",userRouter);
app.use("/todos",todoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    await connection
    console.log(`Server running on port ${PORT}`);
});