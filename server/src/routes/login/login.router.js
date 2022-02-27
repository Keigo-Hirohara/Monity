const express = require('express');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    res.json({
        name: 'keigo',
        password: '158281872keigo'
    });
})

module.exports = loginRouter;