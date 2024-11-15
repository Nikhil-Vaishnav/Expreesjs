const express = require("express");
const app = express();
// console.dir(app); 
let port = 3000;
app.listen(port, () => {/**listen make the webserver for the incomming api*/
    console.log(`app is listing on port ${port}`);
    

});
// this is the main index File for node. 

/**app.use((req, res)=> {
    console.log("request recived");
});*/ /**this will recived the request */


// -----------------------------------------------------------------------------------

app.use((req, res)=> {
    console.log("request recived");
    res.send({
        name: "Nikhil Vaishnav",
        college: "GITS"
    });
});/**this will send the responose to server */

/**note - the express will convert the text format to json fromat */