const {login,register } = require("../controller/user.controller")
const auth = require("../middlewares/auth.middleware")
const userRouter = require("express").Router()

userRouter.post("/register",register)
userRouter.post("/login",login)



module.exports = userRouter