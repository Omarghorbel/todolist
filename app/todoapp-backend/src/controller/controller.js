const express = require('express')
var router = express.Router()
var { Todolist } = require('../models/todolist')

router.post('/addnew', (req, res) => {
    var todolist = new Todolist({
        title: req.body.title,
    })
    setTimeout(function(){
        todolist.save((err, docs) => {
            if (!err) res.send(docs)
            else console.log('Error')
        })
    },3000);
 })
router.delete('/delete/:title', (req, res) => {
    Todolist.find({ title: req.params.title }).remove().exec();
})
module.exports = router
