const express = require("express");
const app = express();
// console.dir(app); 
let port = 8080;
app.listen(port, () => {/**listen make the webserver for the incomming api*/
    console.log(`app is listing on port ${port}`);
    

});
// this is the main index File for node. 

/**app.use((req, res)=> {
    console.log("request recived");
});*/ /**this will recived the request */


// -----------------------------------------------------------------------------------

// app.use((req, res)=> {
//     console.log("request recived");
//     res.send({
//         name: "Nikhil Vaishnav",
//         college: "GITS"
//     });
// });/**this will send the responose to server */

/**note - the express will convert the text format to json fromat */
// -----------------------------------------------------------------------------------

/**now we will use the get on place of the use for making differnet routes */

app.get("/", (req, res) =>{
    res.send("you contacted root path");
});

app.get("/", (req, res) =>{
    res.send("you contacted root path");
});

app.get("/help", (req, res) =>{
    res.send("you contacted help path");
});

app.get("/search", (req, res) =>{
    res.send("you contacted search path");
});

app.get("/newPage", (req, res) =>{
    res.send("you contacted newPage path");
});

app.get("*", (req, res) =>{
    res.send("This page does not available");
});/**this will print when ther is search is out for all requests */

app.post("/", (req, res) =>{
    res.send("you sent a post request");
});/**this a post method */
// -----------------------------------------------------------------------------------
 