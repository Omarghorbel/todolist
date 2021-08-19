// const mongoose = require('mongoose')
// import { model, Schema } from "mongoose";
// var Todolist = mongoose.model('Todolist',
//     {
//         name : {type:String},
//         elements: [{ type: Schema.Types.ObjectId, ref: "Element" }],
//     },'todolists')
//
// module.exports = { Todolist}

import { model, Schema } from "mongoose";
 const TodolistSchema = new Schema({
    title: String,
});

module.exports = model("Todolist", TodolistSchema);
