var request = require('request');
var Events = require('./db/Models/event.js');

module.exports = {
  getEvents: (req, res) => {
    Events.find()
          .limit(10)
          .exec((err, results) => {
            if(err){
              res.send('Error retrieving events');
            } else {
              res.status(200).send(results);
            }
          })
  },

  postEvents: (req, res) => {
    let title = req.body.title;
    let category = req.body.category;
    let location = req.body.location;
    let imageURL = req.body.imageURL;

    Events.create({
      eventTitle: title,
      eventCategory: category,
      eventLocation: location,
      eventImageURL: imageURL
    }, function(err, event){
      if(err){
        console.log('Error creating event');
      } else {
        console.log('Event created', event);
      }
    })
  }
}