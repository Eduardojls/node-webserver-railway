import http from 'http';

http.createServer( (req, res)=> {


    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});


    res.write( 'Hello Wordl!' );
    res.end();

}).listen( 8080 );

console.log('Listening on port 8080');