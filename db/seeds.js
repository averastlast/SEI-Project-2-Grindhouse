let Axis = require('../models/Axis.js')
//working, ran once
let newAxis = [
  {
    name: 'rob',
    email: 'rob@rob',
    costPerHour: 0
  },
  {
    name: 'bob',
    email: 'bob@bob',
    costPerHour: 8
  }
]

Axis.create(newAxis).then(axis => {
    console.log('Saved Axis', axis)
  })


let Alts = require('../models/Alts.js')
// working, ran once
let newAlts = [
  {
    alias: 'angel',
    game: 'halo',
    platform: 'PC',
    hours: 8,
    youtubeLink: 'https://www.youtube.com/embed/xJ-jy8t54aI',
    price: 400
  },
  {
    alias: 'devil',
    game: 'CoD',
    platform: 'PS4',
    hours: 10,
    youtubeLink: 'https://www.youtube.com/embed/HOFoSuM-bz8',
    price: 0
  }
]

Alts.create(newAlts).then(alts => {
    console.log('Saved Alts', alts)
  })



let Comments = require('../models/Comments.js')
let newComments = [
  {
    alias: 'Greenthyme',
    game: 'BOXMAN',
    feedback: 'Rools'
  },
  {
    alias: 'Redthyme',
    game: 'BOXMAN 2',
    feedback: 'Drools'
  }
]

Comments.create(newComments).then(comments => {
    console.log('Saved Commentss', comments)
  })