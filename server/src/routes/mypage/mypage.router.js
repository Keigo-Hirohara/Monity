const express = require('express');

const mypageRouter = express.Router();

mypageRouter.get('/', (req, res) => {
    res.send('this is a mypage router');
})

module.exports = mypageRouter;