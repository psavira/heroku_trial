//const res = require("express/lib/response");

const app = require("express")();
//const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.get("/",(req, res) => {
    // res.send("Hello world! I hope youre're doing well");
    res.sendFile(__dirname + "/login-page.html");
});

app.listen(PORT,() => {
    console.log('App up at port %s', PORT);
});