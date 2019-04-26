let Axis = require('../models/Axis.js')
//working, ran once
let newAxis = [
  {
    name: 'rob',
    email: 'rob@rob',
    boostOffer: false,
    costPerHour: 0
  },
  {
    name: 'bob',
    email: 'bob@bob',
    boostOffer: true,
    costPerHour: 8
  }
]

Axis.create(newAxis).then(axis => {
    console.log('Saved Axis', axis)
  })