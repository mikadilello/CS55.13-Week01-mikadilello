let myhttp = require("http");

let myserver = myhttp.createServer(
  function( myRequest, myResponse) {
    console.log( myRequest.url );

    let myText;
    myText = "i love my cat\n";

    myText = myText + 'help, my cat is trying to eat my mouse'

    myResponse.writeHead( 200, { "Content-Type": "text/plain" } );
    myResponse.end( myText + "\n");

  }
);

myserver.listen(8080, "0.0.0.0");
console.log( "server has started" );