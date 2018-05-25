/*
  Read files given as argument on terminal, and return # of new lines
  asynchronously
*/

const fs = require('fs');

let filePath = process.argv[2];

let bufferObj = fs.readFile(filePath, (err, data) => {
   if (err) throw err;

   else {
       let bufferStr = data.toString();
       let bufferStrSplit = bufferStr.split('\n');

       console.log(bufferStrSplit.length-1);
   }
});
