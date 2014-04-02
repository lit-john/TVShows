
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.addShow = function(req, res) {
  var theShowName = req.param('show');
  
  res.render('showName', {theName: theShowName});
};