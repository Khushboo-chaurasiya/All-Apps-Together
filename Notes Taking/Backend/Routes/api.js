const express = require('express');
const router = express.Router();

const Note = require("../models/notes");

/* Notes GET & POST , delete API */
router.post('/notes', function(req,res,next){
    Note.create(req.body).then(function(notes){
        res.send(notes);
    }).catch(next);
})

router.get('/notes', function(req,res){
    Note.find({}).then(function(notes){
        res.send(notes);
    })
})

router.delete('/notes/:id', function(req,res,next){
    Note.findByIdAndRemove({_id:req.params.id}).then
    (function(notes){
        res.send(notes);
    }).catch(next);
})


module.exports = router ;