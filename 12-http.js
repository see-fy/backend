const  http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World Node')
        res.end()
        return;
    }
    if(req.url === '/about') {
        res.write('Here it is the about page')
        res.end()
        return;
    }else {
        res.write(`
        <h1>Oops! Oopsidie! Oops</h1>
        <p>We can't connect to this page.</p> 
        <a href="/">Back Home</a>
        `)
        res.end()
        return;
    }
});

server.listen(3000);

