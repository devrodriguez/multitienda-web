const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/multitienda-web'));
app.listen(process.env.PORT || 8080);

// Routing
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/multitienda-web/index.hml'))
});

console.log('Server listening...')