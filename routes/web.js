const express = require('express'),
    router = express.Router(),
    eventsController = require("../app/controllers/events.controller")

  module.exports = router;

//Define App Routes 
//localhost:3000
router.get('/', eventsController.index2);

//localhost:3000/about
router.get('/about', eventsController.about);

//localhost:3000/contact
router.get('/contact', eventsController.contact);


//localhost:3000/posts
router.get('/AllPosts', eventsController.posts);

//localhost:3000/posts
router.get('/samplePost', eventsController.showPost);

router.get('/index/:id', eventsController.myPost);
