const Comments = require("../models/Comments");

const CommentsController = {
  // function sends all Comments to comments/index.hbs view
  index: function(req,res) {
    Comments.find().then(comments=>{
      res.render('comments/index',{ comments });
    })
  },
  // function that renders the comments/new.hbs form ???
  new: function(req,res) {
    res.render("comments/create");
  },
  // function that renders a single comments show page
  show: function(req,res) {
    Comments.findById(req.params.id).then(comments =>{
      res.render("comments/show", {comments})
    })
  },
  // Create a function that creates a new comment
  // and upon success redirects back to the index page "/"
  create:function(req,res){
    console.log(req)
    Comments.create(req.body)
      .then(()=>res.redirect('/comments/'))
  },
  // Create a function that renders the edit.hbs page and
  // sends that a comments' data to it
  edit:function(req,res){
  
    Comments.findById(req.params.id).then(comments=>{
      res.render('comments/edit',{comments})
      })
  },
  // Create a function that updates the comments acc and
  // redirects back to the SHOW PAGE (not index)
  //new: bool - true to return the modified document rather than the original. defaults to false
  update:function(req,res){
    Comments.findByIdAndUpdate(req.params.id, req.body,{new:true}).then(()=>{
    res.redirect("/comments/" + req.params.id)
      })
  },
  // Create a function that deletes the comments acc and
  // redirects back to index page "/"
  delete: function(req,res) {
    Comments.findByIdAndRemove(req.params.id).then(()=>{
      res.redirect('/comments/')
    })
  }
}
  
module.exports = CommentsController