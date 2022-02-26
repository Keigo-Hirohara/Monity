const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.send('this is a login router');
})

module.exports = loginRouter;