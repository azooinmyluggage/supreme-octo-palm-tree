var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// Convert Fahrenheit to Celsius
function FarenheitToCelcius(f) {
    return (f - 32) * 5 / 9;
}

