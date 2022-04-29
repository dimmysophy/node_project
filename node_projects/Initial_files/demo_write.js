// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
var fs = require('fs')

fs.writeFile('mynewfile3.txt', 'replacing the previous content unlike append that appends to the initial content', function (err, file) {
  if (err) throw err;
  console.log('Replaced!');
});