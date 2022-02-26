const express = require('express');

const roomRouter = express.Router();

roomRouter.get('/', (req, res) => {
    res.send('this is a room router');
})

module.exports = roomRouter;