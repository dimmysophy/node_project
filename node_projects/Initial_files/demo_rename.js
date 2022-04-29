var fs = require('fs')

fs.rename('mynewfile.txt', 'myrenamednewfile.txt', function (err) {
    if (err) throw err;
    console.log('file renamed!');
})