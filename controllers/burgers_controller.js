const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function (req, res){
    res.send("the home page");
});

