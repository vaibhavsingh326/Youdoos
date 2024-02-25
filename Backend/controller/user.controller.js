const {UserModel} = require("../models/users.model.js")





const register = async (req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password) return res.status(400).send("Please provide name, email and password")
    
    const newUser = new UserModel({name,email,password})
    
    await newUser.save()

    res.status(200).send({newUser})

}

const login = async (req,res)=>{
    const {email,password} = req.body

    if(!email || !password) return res.status(400).send("Please provide email and password")

    const user = await UserModel.findOne({email})

    if(!user) return res.status(404).send("User not found")

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect) return res.status(400).send("Invalid credentials")
    
    const accessToken = user.generateAccessToken()

    res.status(200).send({user,accessToken})

}

module.exports = {register,login}