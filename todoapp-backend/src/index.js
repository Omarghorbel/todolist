const cors = require('cors')
import controller from './controller/controller'
require('./db')
import 'dotenv/config'
import express from 'express';
import bodyParser from "body-parser";

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4001'}))
app.listen(4007,()=>console.log('Server started at : 4007'))
app.use('/api',controller);


