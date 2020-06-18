var express = require('express');
var bodyParser = require('body-parser');
// var helmet = require('helmet');
// const xssFilter = require('x-xss-protection');

// Sets "X-XSS-Protection: 1; mode=block".
// Import db
var { connection } = require('./db');

const apiRouter = require('./router');

var app = express();
// app.use(xssFilter())

app.use(express.static(__dirname))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// app.use(helmet());
// app.use(helmet.xssFilter());
// app.use(helmet.frameguard());

var messagesAry = [
    { "name": "Timothy", "message": "Hello!" },
    { "name": "Tom", "message": "Hi!" },
]

app.get('/messages', (req, response) => {
    response.send(messagesAry)
});

app.post('/getUser', (req, res) => {
    console.log("\n req.body: ", req.body);
    var userId = req.body.userId;
    console.log('\n userId: ', userId);
    // '61bc1bb0-afd6-11ea-b0e2-0242ac140002'
    connection.query(`CALL spGetUser(${userId});`, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        connection.end();
        res.status(200).send({ message: 'api run', data: results });
    });
});


var server = app.listen(3000, () => {
    //console.log(server);
    console.log("server listening on port number: ", server.address().port)
});

// API router
app.use('/api/v1/', apiRouter);