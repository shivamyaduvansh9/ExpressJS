const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; 

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
   let {username, id}  = req.params;
    res.send(`welcome you the page of @${username}.`);
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    let{q} = req.query;
    res.send(`search results for query:${q}`);
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path does not exists");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request");
// });


// app.use((req, res) => {//seding Response
//     console.log("request received");
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // });
//     let code ="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });



