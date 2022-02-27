const { application } = require('express');
const express = require('express');
const loginRouter = require('./login/login.router');
const mypageRouter = require('./mypage/mypage.router');
const roomRouter = require('./room/room.router');

const api = express.Router();

api.get('/', (req, res) => {
    res.send('this is a root page!');
})

api.use('/login', loginRouter);

api.use('/mypage', mypageRouter);

api.use('/room', roomRouter);

module.exports = api;