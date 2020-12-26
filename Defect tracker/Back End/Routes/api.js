const express = require('express');
const router = express.Router();

const Defect = require("../models/defects");


router.get('/defects', function(req,res){
    Defect.find({}).then(function(defect){
        res.send(defect);
    })
})

// To get only id specific data 

router.get('/defects/:id', function(req,res,next){
    Defect.findOne({_id:req.params.id}).then(function(defect){
        res.send(defect);
    }).catch(next);
})

router.post('/defects', function(req,res,next){
    Defect.create(req.body).then(function(defect){
        res.send(defect);
    }).catch(next);
})

router.put('/defects/:id', function(req,res,next){
    Defect.findByIdAndUpdate({_id:req.params.id} , req.body).then(function(){
        Defect.findOne({_id:req.params.id}).then(function(defect){
        res.send(defect);
    }).catch(next);
    })
})

router.delete('/defects/:id', function(req,res,next){
    Defect.findByIdAndRemove({_id:req.params.id}).then
    (function(defect){
        res.send(defect);
    }).catch(next);
})

module.exports = router ;