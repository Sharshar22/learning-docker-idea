const express = require('express');

// create a server
const app = express();

// listen to all URLs/ rountes

app.get('*',(req, res) => {
    res.send(`I am a Node.js/Express server and I'am Ok!`);

});

// startup the server

app.listen(process.env.PORT);