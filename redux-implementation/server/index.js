const express = require('express')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

// logger function will be used as middleware
const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
.use(logger)
.use(cors())
.use('/', express.static('./redux-implementation/client/public/dist'))

app.listen(port, () => console.log('sfsbooklet running on port ' + port + 'with a ' + delay/1000 + 'second delay' ))