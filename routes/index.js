let express = require('express')
let router = express.Router()

const AxisController = require('../controllers/axis.js')
const AltsController = require('../controllers/alts.js')
const CommentsController = require('../controllers/comments.js')

// Create a GET index route "/" that triggers the controller index function HOME - working
router.get('/', function(req, res,) {
    res.render('index');
});

// Create a GET index route "/" that triggers the controller index function
router.get('/axis', AxisController.index)

// Create a GET new route "/new" that triggers the controller new function - working
router.get('/axis/new', AxisController.new)

// Create a GET show route "/:id" that triggers the controller show function - working
router.get('/axis/:id', AxisController.show)

// Create a POST index route "/" that triggers the controller create function
router.post('/axis/:id', AxisController.create)

// Create a GET edit route "/:id/edit" that triggers the controller edit function - working
router.get("/axis/:id/edit", AxisController.edit)

// Create a PUT update route "/:id" that triggers the controller update function - working
router.put('/axis/:id', AxisController.update)

// Create a DELETE delete route "/:id" that triggers the controller delete function
router.delete('/axis/:id',AxisController.delete)


// Create a GET index route "/" that triggers the controller index function - working
router.get('/alts', AltsController.index)

// Create a GET new route "/new" that triggers the controller new function - working
router.get('/alts/new', AltsController.new)

// Create a GET show route "/:id" that triggers the controller show function - working
router.get('/alts/:id', AltsController.show)

// Create a POST index route "/" that triggers the controller create function
router.post('/alts/:id', AltsController.create)

// Create a GET edit route "/:id/edit" that triggers the controller edit function
router.get("/alts/:id/edit", AltsController.edit)

// Create a PUT update route "/:id" that triggers the controller update function
router.put('/alts/:id', AltsController.update)

// Create a DELETE delete route "/:id" that triggers the controller delete function
router.delete('/alts/:id',AltsController.delete)


  // Create a GET index route "/" that triggers the controller index function
  router.get('/comments', CommentsController.index)
  
  // Create a GET new route "/new" that triggers the controller new function
  router.get('/comments/new', CommentsController.new)
  
  // Create a GET show route "/:id" that triggers the controller show function
  router.get('/comments/:id', CommentsController.show)
  
  // Create a POST index route "/" that triggers the controller create function
  router.post('/comments/:id', CommentsController.create)
  
  // Create a GET edit route "/:id/edit" that triggers the controller edit function
  router.get("/comments/:id/edit", CommentsController.edit)
  
  // Create a PUT update route "/:id" that triggers the controller update function
  router.put('/comments/:id', CommentsController.update)
  
  // Create a DELETE delete route "/:id" that triggers the controller delete function
  router.delete('/comments/:id',CommentsController.delete)

module.exports = router