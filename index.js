const express = require("express");
const app = express();
console.dir(app); 
let port = 3000;
app.listen(port, () => {
    console.log(`app is listing on port ${port}`);
    

});
// this is the main index File for node. 
