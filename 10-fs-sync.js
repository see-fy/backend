const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first + ' ' + second);
writeFileSync('./content/result-sync.txt', ` This is the result of the merge: ${first} and ${second}`, { flag: 'a'});

const result = readFileSync('./content/result-sync.txt', 'utf8');

console.log(result);
console.log('done with the task')
console.log('starting the next task')


