const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

console.log('Start')

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(first, second)
    await   writeFile('./content/result-async.txt', ` A new A await merge: ${first} and ${second}`, { flag: 'a'});    
  }catch (error) {
    console.log(error)
  }
}
start();

console.log('Starting the newest newerer task')





// const getText = (path) => {
//   return new Promise((resolve, reject) => {

//     readFile(path, 'utf8', (err, data) => {
//         if(err) {
//             reject(err);
//             return;
//         }else {
//           resolve(data)
//           return;
//         }   
//     }) 
//   })
// }
//*********************************** */

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

//******************************* */

// readFile('./content/first.txt', 'utf8', (err,data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }else {
//       console.log(data)
//       return;
//     }   
// })