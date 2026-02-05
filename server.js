const userRoute = require('./routes/users.route.js')
const express = require('express')
const app = express()

app.use(express.json())

app.use(userRoute)

app.listen(3000, () => console.log('this server is running on port 3000'))
