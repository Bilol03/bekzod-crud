const express = require('express')
const {GET, GET_BY_ID, POST, UPDATE, DELETE} = require('../controller/users.controller.js')
const route = express.Router()

route.get('/users', GET)
route.get('/users/:id', GET_BY_ID)
route.post('/users', POST)
route.put('/users/:id', UPDATE)
route.delete('/users/:id', DELETE)

module.exports = route