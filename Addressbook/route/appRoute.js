const { getSingleAddress } = require('../controller/appController')
const appController = require('../controller/appController')
const appRoute = require('express').Router()

appRoute.get('/', appController.index)
appRoute.get('/address/new', appController.newPage) // create route

appRoute.post(`/address/add`, appController.newAddress) //read route

appRoute.get(`/address/edit/:id`, appController.getSingleAddress)

appRoute.patch('/address/update/:id', appController.updateAddress) //update route

appRoute.delete(`/address/delete/:addId`, appController.deleteAddress) // delete route

module.exports = appRoute