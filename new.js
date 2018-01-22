// JavaScript Document
//normal js

var http = require('http');
var url = require( "url") ;     

 
    http.createServer( function (request, res) {
    var path = url.parse(request.url).pathname;
    showpage( res, path  );
    }).listen(8080);
  
   function showpage( res, path ){
        if( pagemap[path] ){
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write( pagemap[ path ] );
              res.end(); 
          }else{
              res.writeHead(404, {'Content-Type': 'text/html'});
              res.write( "404 page not found" );
              res.end(); 
          }
    }
 
  var pagemap  = { "/" : "<div> home page </div>" , 
                    "/gopi" : "<div> this is gopi page</div>",
                    "/test" : "<div> this is test page</div>",
                    "/mallik" : "<div> this is mallik page</div>",
                    "/new" : "<div> this is new page</div>" ,
              };
console.log("Hello, Worlds!")
