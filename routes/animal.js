var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


router.route('/')

/* GET All Blogs */
  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animals){
      if(err){
        console.log(err);
      } else {
        res.json(animals)
        //DO SOMETHING WITH THE RESPONSE - I did it.
      }
    });
  })

  .post(function(req, res){
    var type = req.body.type;
    var name = req.body.name;
    //save the request variables - I did it.

    mongoose.model('Animal').create({
      type: type,
      name: name //Use the variables - I did it.
    }, function(err, animal){
      if(err){
        res.send("There is a problem") //DO SOMETHING - I did it.
      } else{
        console.log("New animal named " + animal + "created!");
        res.send(animal); //DO SOMETHING WITH THE RESPONSE - I did it.
      }
    });
  });

module.exports = router;