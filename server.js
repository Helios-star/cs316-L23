const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //Write here
    if (req.url == '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        let css_file = fs.readFileSync('style.css');
    }
});

server.listen(process.env.PORT || 3000);
