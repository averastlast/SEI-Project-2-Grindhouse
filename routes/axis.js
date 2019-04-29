let express = require('express')
let router = express.Router()
const AxisController = require('../controllers/axis.js')

// Create a GET index route "/" that triggers the controller index function
router.get('/', AxisController.index)

// Create a GET new route "/new" that triggers the controller new function
router.get('/:new', AxisController.new)

// // Create a GET show route "/:id" that triggers the controller show function
// router.get('/:id', AxisController.show)

// // Create a POST index route "/" that triggers the controller create function
// router.post('/', AxisController.create)

// // Create a GET edit route "/:id/edit" that triggers the controller edit function
// router.get("/:id/edit", AxisController.edit)

// // Create a PUT update route "/:id" that triggers the controller update function
// router.put('/:id', AxisController.update)

// //buy
// router.put('/:id/buy', AxisController.buy)

// // Create a DELETE delete route "/:id" that triggers the controller delete function
// router.delete('/:id',AxisController.delete)

module.exports = router