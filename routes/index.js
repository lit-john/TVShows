
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.addShow = function(req, res) {
  var theShowName = req.param('show');

  var db = req.app.settings.theDBConnection;

  db.collection('shows', function (err, theShowsCollection) {
		if (err) throw err;

		var showDetails = {
			showName: theShowName
		};

		theShowsCollection.insert(showDetails, {w:1}, function (err, result) {
			if (err) throw err;

			res.render('showName', {theName: theShowName});
		});
	});

  
};