let express = require('express')
let router = express.Router()

// Create a GET index route "/" that triggers the controller index function
router.get('/', donutController.index)

// Create a GET new route "/new" that triggers the controller new function
router.get('/:new', donutController.new)

// Create a GET show route "/:id" that triggers the controller show function
router.get('/:id',donutController.show)

// Create a POST index route "/" that triggers the controller create function
router.post('/',donutController.create)

// Create a GET edit route "/:id/edit" that triggers the controller edit function
router.get("/:id/edit",donutController.edit)

// Create a PUT update route "/:id" that triggers the controller update function
router.put('/:id',donutController.update)

//buy
router.put('/:id/buy',donutController.buy)

// Create a DELETE delete route "/:id" that triggers the controller delete function
router.delete('/:id',donutController.delete)

module.exports = router