const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    res.send("user-routes");
})

module.exports =router;