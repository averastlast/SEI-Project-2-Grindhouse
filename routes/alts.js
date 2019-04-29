let express = require('express')
let router = express.Router()
const AltsController = require('../controllers/alts.js')

// Create a GET index route "/" that triggers the controller index function
router.get('/', AltsController.index)

// // Create a GET new route "/new" that triggers the controller new function
// router.get('/:new', AltsController.new)

// // Create a GET show route "/:id" that triggers the controller show function
// router.get('/:id', AltsController.show)

// // Create a POST index route "/" that triggers the controller create function
// router.post('/', AltsController.create)

// // Create a GET edit route "/:id/edit" that triggers the controller edit function
// router.get("/:id/edit", AltsController.edit)

// // Create a PUT update route "/:id" that triggers the controller update function
// router.put('/:id', AltsController.update)

// //buy
// router.put('/:id/buy', AltsController.buy)

// // Create a DELETE delete route "/:id" that triggers the controller delete function
// router.delete('/:id',AltsController.delete)

module.exports = router