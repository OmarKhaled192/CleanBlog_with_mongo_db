const { model } = require("mongoose")

//Grap Event Model
const Event = require('../models/event');

// Home Page :
// function index(req, res) {
//   const events = [
//     {title :"Man must explore, and this is exploration at its greatest" , description: "Problems look mighty small from 150 miles up" , date : "on September 24, 2022" },
//     {title :"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." , description: "" , date : "on September 18, 2022" },
//     {title :"Man must explore, and this is exploration at its greatest" , description: "Problems look mighty small from 150 miles up" , date : "on September 24, 2022" },
//     {title :"Man must explore, and this is exploration at its greatest" , description: "Problems look mighty small from 150 miles up" , date : "on September 24, 2022" }
//   ]
//     res.render('pages/index.ejs', {title : "Home Page", events})
// }

function index2(req, res) {
  Event.find({}, (err, events) => { 
    if(err) throw err;
    //render page with events 
    res.render('pages/index.ejs', {title : "Home Page", events})
  });
}

// about page:
function about(req, res) {
  res.render('pages/about.ejs', {title : "About Page"})
}

//AllPosts page:
function posts(req, res) {
    Event.find((err, event) => { 
    if(err) throw err;
    //render page with events 
    res.render('pages/AllPosts.ejs', {title : "Posts Page", event})
  });
}

//posts page:
function showPost(req, res) {
    Event.findById(req.params.id,(err, event) => { 
    if(err) throw err;
    //render page with events 
    res.render('pages/samplePost.ejs', {title : "Posts Page", event})
  });
}


//contact Page
function contact(req,res) {
  res.render('pages/contact.ejs' , {title : "contact Page"})
}


//posts page:
function myPost(req, res) {
    Event.findById(req.params.id,(err, event) => { 
    if(err) throw err;
    //render page with events 
    res.render('pages/myPost.ejs', {title : "one Post", event})
  });
}

module.exports = {
  index2,
  about,
  posts,
  contact,
  showPost,
  myPost
}