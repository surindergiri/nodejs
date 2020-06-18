var mysql = require('mysql');
module.exports = {
    // dbConn: async () => {
    connection: mysql.createConnection({
        // host: 'mysql-server',
        // host: 'localhost',
        host: 'mysql_container',
        user: 'root',
        password: 'secret',
        database: 'test_db'
    })
    // connection.connect();
    // return connection;
    // }
}

// connection.query(`CALL spGetUser('61bc1bb0-afd6-11ea-b0e2-0242ac140002')`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// connection.end();