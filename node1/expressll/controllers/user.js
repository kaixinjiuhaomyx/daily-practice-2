// 注册



// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'newblog'
// });
 



exports.reg = function(req,res,next){
    res,render("reg.ejs")

    // connection.connect();
 
    // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // if (error) throw error;
    // console.log('The solution is: ', results[0].solution);
    // connection.end();
    // });
    
   
}