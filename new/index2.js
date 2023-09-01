//Append File cannot replace content of existing file it can add content at the ending cursorpoint
// var fs=require('fs');
// fs.appendFile('my.txt', 'Helllo !!!!', function(err){
// if(err) throw err;
// console.log('saved');
// });

// Open file --Create blank file and if file already exist then it will modify it as blank file
var fs = require('fs');
fs.open('my.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

//Write file replace the specified file and content if exist
// var fs = require('fs');
// fs.writeFile('my1.txt', 'Hello Everyone! How are you!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//Delete File
// var fs = require('fs');
// fs.unlink('my.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

//Rename a File
// var fs = require('fs');
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });