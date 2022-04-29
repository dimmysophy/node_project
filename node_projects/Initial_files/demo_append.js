var fs = require('fs')

fs.appendFile('mynewfile.txt', ' . Adding more content to view spacing', function (err, file) {
    if (err) throw err;
    console.log('Saved!!');
})