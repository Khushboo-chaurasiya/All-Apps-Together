const express = require('express');
const router = express.Router();

const Todo = require("../models/todo");


router.get('/todos', function(req,res){
    Todo.find({}).then(function(todo){
        res.send(todo);
    })
})

// To get only id specific data 
router.get('/todos/:id', function(req,res,next){
    Todo.findOne({_id:req.params.id}).then(function(todo){
        res.send(todo);
    }).catch(next);
})

router.post('/todos', function(req,res,next){
    Todo.create(req.body).then(function(todo){
        res.send(todo);
    }).catch(next);
})


router.put('/todos/:id', function(req,res,next){
    Todo.findByIdAndUpdate({_id:req.params.id} , req.body).then(function(){
    Todo.findOne({_id:req.params.id}).then(function(todo){
        res.send(todo);
    }).catch(next);
    })
})
/* delete all table record */
router.delete('/todos', function(req,res,next){
    Todo.deleteMany({}).then
    (function(todo){
        res.send(todo);
    }).catch(next);
})

router.delete('/todos/:id', function(req,res,next){
    Todo.findByIdAndRemove({_id:req.params.id}).then
    (function(todo){
        res.send(todo);
    }).catch(next);
})


module.exports = router ;