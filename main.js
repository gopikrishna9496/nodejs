// JavaScript Document
// express js
var http = require('http');
var url = require( "url") ;
var express = require('express'); 
var app = new express(); 

app.listen( 8080,function(err) {
      if( typeof( err) != "undefined" ){
           console.log( "application cant run due to server issue");                
      }  
});
app.set( "view engine" , "ejs");

app.use( function(req, res){   
     pageurl = url.parse(req.url ).pathname;    
    if( pagemap[ pageurl ] ){
        res.render( pagemap[ pageurl ], {title: }  )
    } 
}); 

var pagemap  = { "/" : "<div> home page </div>" , 
    "/gopi" : "index",
    "/test" : "<div> this is test page</div>",
    "/mallik" : "<div> this is mallik page</div>",
    "/new" : "<div> this is new page</div>" ,
};
console.log("Hello, Worlds!")
