var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;

const server = http.createServer(function(req, res){
    const path = req.url;
    const method = req.method;
    if(path === '/products'){
        if(method === 'GET'){
            res.writeHead(200, { "Content-Type": "application/jsoon"});
            const products = JSON.stringify([
                {
                    name: "농구공",
                    price: 5000,
                }
            ]);
            res.end(products);

        } else if (method === "POST") {

            res.end('생성되었습니다.');
        }
    }
    
    

    console.log("REQUEST: ", req);
    res.end("Hello Client"); /* respond.end하면 respond에서 마지막으로 출력되는 값인가?*/
})

server.listen(port, hostname);

console.log('grab market server on!');