const Alts = require("../models/Alts");

const AltController = {
    // function sends all Alts to alts/index.hbs view
    index: function(req,res) {
      Alts.find().then(alts=>{
        res.render('alts/index',{alts});
      })
    },
    // function that renders the alts/new.hbs form ???
    new: function(req,res) {
      res.render("alts/new");
    },
    // function that renders a single alt show page
    show: function(req,res) {
      Alts.findById(req.params.id).then(alts =>{
        res.render("alts/show", {alts})
      })
    },
    // Create a function that creates a new alt acc
    // and upon success redirects back to the index page "/"
    create:function(req,res){
      console.log(req)
      Alts.create(req.body)
        .then(()=>res.redirect('/'))
    },
    // Create a function that renders the edit.hbs page and
    // sends that a Alts' data to it
    edit:function(req,res){
      Alts.findById(req.params.id).then(alts=>{
        res.render('alts/edit',{alts})
        })
    },
    // Create a function that updates the alt acc and
    // redirects back to the SHOW PAGE (not index)
    //new: bool - true to return the modified document rather than the original. defaults to false
    update:function(req,res){
      Alts.findByIdAndUpdate(req.params.id, req.body,{new:true}).then(()=>{
      res.redirect("/" + req.params.id)
        })
    },
    // Create a function that deletes the alts acc and
    // redirects back to index page "/"
    delete: function(req,res) {
      Alts.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect('/')
      })
    }
  }
  
  module.exports = {AltController}