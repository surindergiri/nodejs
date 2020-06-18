const sanitizer = require('sanitizer');
var { connection } = require('./db');

const xssAttack = {
    // app.post('/addUser', (req, res) => {
    addUser: async (req, res) => {
        try {

            console.log("\n req.body addUser: ", req.body);
            var userEmail = req.body.email;
            // var userName = req.body.name;
            var userName = sanitizer.escape(req.body.name);
            console.log("\n userName: ", userName);
            connection.query(`CALL spAddUser('${userName}','${userEmail}');`, function (error, results, fields) {
                if (error) {
                    // throw error;
                    return res.status(400).send({ message: 'api run error: ', error_msg: error });
                }
                console.log('The solution is: ', results);
                connection.end();
                return res.status(200).send({ message: 'api run', data: results });
            });
        } catch (error) {
            return res.status(400).send({ message: 'api run catch error: ', error_msg: error });
        }
    }
    // });
}
module.exports = xssAttack;