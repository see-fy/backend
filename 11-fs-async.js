const { readFile, writeFile } = require('fs');
console.log('Start')

readFile('./content/first.txt', 'utf8', (err,res) => {
    if(err) {
        console.log(err);
        return;
    }else {
        console.log(res)
        const first = res;
        readFile('./content/second.txt', 'utf8', (err,res) => {
            if(err) {
                console.log(err)
                return;
            }else {
                console.log(res);
                const second = res;
                writeFile('./content/result-async.txt', ` This is the result of the merge: ${first} and ${second}`, { flag: 'a'}, (err,res) => {
                    if(err) {
                        console.log(err);
                        return;
                    }else {
                        console.log(res);
                        console.log('done with the task')
                    }
                })
            }
        })
    }
})
console.log('Starting a new task')

