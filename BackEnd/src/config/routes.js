
const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // CURTI Routes
    const curtiService = require('../api/curtiDemais/curtiService')
    curtiService.register(router, '/shots')
    
}