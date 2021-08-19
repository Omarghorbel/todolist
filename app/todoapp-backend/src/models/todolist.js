const mongoose = require('mongoose')
var Todolist = mongoose.model('Todolist',
    {
        title : {type:String},
     },'todolists')
module.exports = { Todolist}
