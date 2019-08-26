const http = require('http');
const fs = require('fs');

//kreiranje servera
http.createServer((req, res)=>{
   let body = '';
   
   if(req.method === 'GET'){
       
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('./form.html', 'UTF-8', (err,data)=>{
       if(err) throw err;

       res.write(data);

       res.end();
    });


   }else if(req.method === 'POST'){

    req.on('data', (data)=>{
       
         body += data;

    });
    req.on('end', ()=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(body, ()=>{
          res.end();
        });
    });
   }else{
     res.writeHead(404, {'Content-Type': 'text/plain'});
     res.end('404 ERROR colud not find page');
   }

}).listen(4444);

console.log('It is working');