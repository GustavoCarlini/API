const router = require('express').Router()


router.get('/', function(req, res) {
    res.send({nome:"Gustavo", idade: 20, curso:"Ciencia da Computacao", email:"gustavo.carlini@outlook.com"})
})
module.exports = router