const jwt = require("jsonwebtoken");
require("dotenv").config()
const {UserModel} = require("../models/users.model.js")

const auth = async (req, res, next) => {
   try {
        const token  = req.headers.authorization?.split(" ")[1];
        const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY );
        const user = await UserModel.findOne({ _id: decoded._id });
        if(user){
            req.user = user;
            next();
        }else{
            res.status(401).send({error:"Please login again"});
        }
    }catch (error) {
        res.status(401).send({error:"Please login first"});
    }
}

module.exports = auth