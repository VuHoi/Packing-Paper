const express = require('express');

const path = require('path');

const app = express();




app.use(express.static('./dist/packing-paper'));
app.use(express.json());

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/packing-paper/index.html'));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

