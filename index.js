// const express = require("express");
// const app = express();
// // console.dir(app); 
// let port = 8080;
// app.listen(port, () => {/**listen make the webserver for the incomming api*/
//     console.log(`app is listing on port ${port}`);
    

// });
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

// app.get("/", (req, res) =>{
//     res.send("you contacted root path");
// });

// app.get("/", (req, res) =>{
//     res.send("you contacted root path");
// });

// app.get("/help", (req, res) =>{
//     res.send("you contacted help path");
// });

// app.get("/search", (req, res) =>{
//     res.send("you contacted search path");
// });

// app.get("/newPage", (req, res) =>{
//     res.send("you contacted newPage path");
// });

// app.get("*", (req, res) =>{
//     res.send("This page does not available");
// });/**this will print when ther is search is out for all requests */

// app.post("/", (req, res) =>{
//     res.send("you sent a post request");
// });/**this a post method */
// -----------------------------------------------------------------------------------


// Path paremeters


// const express = require("express");
// const app = express();
// // console.dir(app); 
// let port = 8080;
// app.listen(port, () => {/**listen make the webserver for the incomming api*/
//     console.log(`app is listing on port ${port}`);
// });

// app.get("/:username", (req, res) =>{
//     console.log(req.params);
//     res.send("you contacted newPage path");
// });

            // ----------------------------
                    //    OR 
            // ----------------------------  
            
            // app.get("/:username/:id", (req, res) =>{
            //     console.log(req.params);
            //     res.send("you contacted newPage path");
            // });           
            // ----------------------------  

            // app.get("/:username/:id", (req, res) =>{
            //     let {username, id} = req.params;
            //     console.log(req.params);
            //     res.send(`welcome to the page of insta @${username}`);
            // });        
            
            // ----------------------------  
            //     // we can also send html string 
            // app.get("/:username/:id", (req, res) =>{
            //     let {username, id} = req.params;
            //     console.log(req.params);
            //     let htmlStr =   `<h1>welcome to the page of insta @${username}${id}<h1>`
            // res.send(htmlStr);
            // });           
            // // ---------------------------- 
            
// //  query string

            // app.get("/search",(req,res)=>{
            //     console.log(req.query);/**this is qurey storing perameter */
            //     res.send("no result");
            // });

//             // http://localhost:8080/search?q="Nikhil"
//             // http://localhost:8080/search?q=Nikhil&Vaishnav
//--------------------------------------------------------------------------------
// to extract the query 

// app.get("/search",(req,res)=>{
//     let { q } = req.query;
//     if(!q){
//         res.send("<h1>nothing searched</h1>")
//     }
//     res.send(`<h1>search result for query: ${q}</h1>`);
// });

// -------------------------------------------------------------------------------
                            //  END 
// -------------------------------------------------------------------------------