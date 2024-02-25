const TodoModel = require("../models/todos.model");


const getAllTodos = async (req, res) => {
   try{ const todos = await TodoModel.find({user:req.user._id}); 
    res.json({todos});
}catch(error){
    res.send({error:error.message});
}

};

const createTodo = async (req, res) => {
    try{
        const user = req.user._id;
    const {title, description, status, time} = req.body;
    if(!title || !description || !status || !time) return res.status(400).send("Please provide title, description, status and time");
    const todo = await TodoModel.create({title, description, status, time, user});
    todo.save();
    res.json({todo});
}catch(error){
    res.send({error:error.message});
}
};

const updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
    const {title, description, status, time} = req.body;
    if(!title || !description || !status || !time) return res.status(400).send("Please provide title, description, status and time");
     await TodoModel.findByIdAndUpdate(id, {title, description, status, time});
     const todo = await TodoModel.findById(id);
    res.json({todo});
    }catch(error){
        res.send({error:error.message});
    }
    

}

const deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
    const todo = await TodoModel.findByIdAndDelete(id);
    res.json({"msg":"todo deleted successfully"});
}catch(error){
    res.send({error:error.message});
}

}


module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}