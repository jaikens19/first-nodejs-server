const http = require('http')
http.createServer(function(req, res){
    if(req.url === '/OK'){
        console.log("Inbound 'OK' request being processed...")
        res.writeHead(200)
        res.write('<h1>200: OK</h1>')
        res.end()
    } else if(req.url === '/Created'){
        console.log('Resource Created')
        res.writeHead(201)
        res.write('<h1>201: Resource Created</h1>')
        res.end()
    } else if(req.url ==='/Forbidden') {
        console.log('Forbidden')
        res.writeHead(403)
        res.write('<h1>403: Forbidden</h1>')
        res.end()
    } else if(req.url === '/Found'){
        console.log('Found')
        // res.redirect('https://www.google.com', 302)
        res.writeHead(302)
        res.write('<h1>302: Found</h1>')
        res.end()
    } else if(req.url === '/Gateway-Timeout'){
        console.log('Gateway Timeout')
        res.writeHead(504)
        res.write('<h1>504: Gateway Timeout</h1>')
        res.end()
    } else if(req.url === '/Internal-Server-Error'){
        console.log('Internal Server Error')
        res.writeHead(500)
        res.write('<h1>500: Internal Server Error</h1>')
        res.end()
    } else if (req.url === '/Moved-Permanently'){
        console.log('Moved Permanently')
        res.writeHead(301)
        res.write('<h1>301: Moved Permanently</h1>')
        res.end()
    } else if (req.url === '/Unauthorized'){
        console.log('Unauthorized')
        res.writeHead(401)
        res.write('<h1>401: Unauthorized</h1>')
        res.end()
    } else if(req.url === '/Not-Found'){
        console.log('Not Found')
        res.writeHead(404)
        res.write('<h1>404: Not Found</h1>')
        res.end()
    } else if (req.url === '/Bonus/Redirect'){
        console.log('Bonus-Redirect')
        res.writeHead(302, { 'Location': 'http://localhost:3000/Forbidden'})
        res.write('<h1>302: Found</h1>')
        res.end()
    } else if (req.url === '/Bonus/Webpage'){
        res.writeHead(200, { 'Context-Type': 'test/html' })
        // res.write('Welcome to the Bonus Webpage')
        res.write(`<html>`)
        res.write(`<head> <title> Bonus Webpage </title></head>`)
        res.write(`<body> Welcome to the Bonus Webpage</body>`)
        res.write(`</html>`)
        res.end()
    } else if(req.url === '/Bonus/Created' && req.method === 'GET') {
        console.log('Method Not Allowed')
        res.writeHead(404)
        res.write('<h1>404: Method Not Allowed</h1>')
        res.end()
    }
    else {
        res.writeHead(400)
        console.log('<h1>400: Bad Request</h1>')
        res.end()
    }
}).listen(3000, function(){
    console.log("server started!")

})