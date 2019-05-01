const Axises = require("../models/Axis");

const AxisController = {
  // function sends all Axis to axis/index.hbs view
  index: function(req,res) {
    Axises.find().then(axis=>{
      res.render('axis/index',{ axis });
    })
  },
  // function that renders the axis/new.hbs form ???
  new: function(req,res) {
    res.render("axis/create");
  },
  // function that renders a single axis show page
  show: function(req,res) {
    Axis.findById(req.params.id).then(axis =>{
      res.render("axis/show", {axis})
    })
  },
  // Create a function that creates a new axis acc
  // and upon success redirects back to the index page "/"
  create:function(req,res){
    console.log(req)
    Axis.create(req.body)
      .then(()=>res.redirect('/axis/'))
  },
  // Create a function that renders the edit.hbs page and
  // sends that a Axis' data to it
  edit:function(req,res){
  
    Axis.findById(req.params.id).then(axis=>{
      res.render('axis/edit',{axis})
      })
  },
  // Create a function that updates the axis acc and
  // redirects back to the SHOW PAGE (not index)
  //new: bool - true to return the modified document rather than the original. defaults to false
  update:function(req,res){
    Axis.findByIdAndUpdate(req.params.id, req.body,{new:true}).then(()=>{
    res.redirect("/axis/" + req.params.id)
      })
  },
  // Create a function that deletes the axis acc and
  // redirects back to index page "/"
  delete: function(req,res) {
    Axis.findByIdAndRemove(req.params.id).then(()=>{
      res.redirect('/axis/')
    })
  }
}

module.exports = AxisController