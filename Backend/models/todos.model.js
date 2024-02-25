const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    time: {
        type:String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

});

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = TodoModel;