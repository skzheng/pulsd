var request = require('request');
var Events = require('./db/Models/event.js');
var db = require('./db/db');

module.exports = {
  getEvents: function(req, res){
    Events.find()
          .limit(10)
          .exec((err, results) => {
            if(err){
              res.send('Error retrieving events');
            } else {
              console.log('good!')
              res.status(200).send(results);
            }
          })
  },

  postEvents: function(req, res){
    console.log('rEQUEST', req.data)
    let title = req.body.title;
    let category = req.body.category;
    let location = req.body.location;
    let imageURLs = req.body.imageURLs;

    Events.create({
      eventTitle: title,
      eventCategory: category,
      eventLocation: location,
      eventImageURLs: imageURLs
    }, function(err, event){
      if(err){
        console.log('Error creating event');
      } else {
        console.log('Event created', event);
      }
    })
  }
}
