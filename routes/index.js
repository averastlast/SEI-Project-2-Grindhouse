let express = require('express')
let router = express.Router()


const AxisController = require('../controllers/axis.js')

// Create a GET index route "/" that triggers the controller index function
router.get('/axis', AxisController.index)

// Create a GET index route "/" that triggers the controller index function
//home
router.get('/', function(req, res,) {
    res.render('index');
  });
module.exports = router