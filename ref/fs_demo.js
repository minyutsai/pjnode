



const fs = require('fs');
const path = require('path');


// create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });


// create and write to file
// fs.writeFile(path.join(__dirname,'/test','privet.txt'),'я люблю node.js',err => {
//     if(err) throw err;
//     console.log('File created and written...');


//     fs.appendFile(path.join(__dirname,'/test','privet.txt'),'node.js или laravel',err => {
//         if(err) throw err;
//         console.log('File created and written...');
//     });
// });


// read file
fs.readFile(path.join(__dirname,'/test','privet.txt'),'utf8',(err, data) => {
    if(err) throw err;
    console.log(data);
});


// rename file
fs.rename(path.join(__dirname,'/test','privet.txt'), path.join(__dirname,'/test','privet_mir.txt'),(err) => {
    if(err) throw err;
    console.log('File renamed..');
});

