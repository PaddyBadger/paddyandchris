var express = require('express');
var router = express.Router();
var apiJS = require('../public/javascripts/index');
var home = require(__dirname, 'views/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Paddy and Chris' });
});

router.get('/accommodation', function(req, res) {
  res.render('accommodation', { title: 'Paddy and Chris - Accommodation' });
});

router.get('/bridesmaids', function(req, res) {
  res.render('bridesmaids', { title: 'Paddy and Chris - Bridesmaids' });
});

router.get('/gifts', function(req, res) {
  res.render('gifts', { title: 'Paddy and Chris - Gifts' });
});

router.get('/travel', function(req, res) {
  res.render('travel', { title: 'Paddy and Chris - Travel' });
});

router.get('/the_big_day', function(req, res) {
  res.render('the_big_day', { title: 'Paddy and Chris - The Big Day' });
});

router.get('/photos', function(req, res) {
  res.render('photos', { title: 'Paddy and Chris - Photos' });
});

router.get('/hen_party', function(req, res) {
  res.render('hen_party', { title: 'Paddy and Chris - Hen Party' });
});

router.get('/ushers', function(req, res) {
  res.render('ushers', { title: 'Paddy and Chris - Ushers' });
});

router.get('/stag_party', function(req, res) {
  res.render('stag_party', { title: 'Paddy and Chris - Stag Party' });
});

router.get('/send', function(req, res) {
  var name = req.query.name;
  console.log("I get called here");
  apiJS.get_info(name, function(data) {
    console.log("guest is ", guest);
    res.json(guest);
  });
});

module.exports = router;
