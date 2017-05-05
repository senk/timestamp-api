var express = require("express")

var app = express()

var port = process.env.PORT || 8080;

app.get('/:data', function (req, res) {
  var date = req.params.data;
  if (/^\d+$/.test(date)) {
    date = parseInt(date*1000)
  }
  date = new Date(date)
  if (date != "Invalid Date") {
    var message = { "unix": date.getTime(), "natural": date.toDateString() };
  } else {
    var message = { "unix": null, "natural": null }
  }
  res.send(JSON.stringify(message));
})

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
