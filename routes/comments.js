let express = require('express')
let router = express.Router()
const CommentsController = require('../controllers/comments.js')

// Create a GET index route "/" that triggers the controller index function
router.get('/', CommentsController.index)

// Create a GET new route "/new" that triggers the controller new function
router.get('/:new', CommentsController.new)

// // Create a GET show route "/:id" that triggers the controller show function
// router.get('/:id', CommentsController.show)

// // Create a POST index route "/" that triggers the controller create function
// router.post('/', CommentsController.create)

// // Create a GET edit route "/:id/edit" that triggers the controller edit function
// router.get("/:id/edit", CommentsController.edit)

// // Create a PUT update route "/:id" that triggers the controller update function
// router.put('/:id', CommentsController.update)

// //buy
// router.put('/:id/buy', CommentsController.buy)

// // Create a DELETE delete route "/:id" that triggers the controller delete function
// router.delete('/:id',CommentsController.delete)

module.exports = router