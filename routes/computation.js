var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var x = Math.random();
  res.render('computation',{value1:`math.acosh() applied to ${x} is ${Math.acosh(x)}`,
value2:`math.log1p() applied to ${x} is ${Math.log1p(x)}`,
value3:`math.tan() applied to ${x} is ${Math.tan(x)}`,
value4:`math.sqrt() applied to ${x} is ${Math.sqrt(x)}`
});
}

else{
  for(let i in req.query){
    res.render('computation',{value1:`math.acosh() applied to ${req.query[i]} is  ${Math.acosh(req.query[i])}`,
value2:`math.log1p() applied to ${req.query[i]} is ${Math.log1p(req.query[i])}`,
value3:`math.tan() applied to ${req.query[i]} is ${Math.tan(req.query[i])}`,
value4:`math.sqrt() applied to ${req.query[i]} is ${Math.sqrt(req.query[i])}`})
  }

}
 
});

module.exports = router;
