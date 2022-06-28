var express = require('express');
var router = express();
var mysql = require('mysql2');
var cors = require('cors')
var db = mysql.createConnection({
    host: '127.0.0.1', // Replace with your host name
    user: 'root',      // Replace with your database username
    password: 'G0vern0r.!',      // Replace with your database password
    database: 'TASK TRACKER' // // Replace with your database Name
  }); 
  db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
  
  var dateRouter = './routes/DATE';
  router.use(cors());
  router.use(express.json());
router.use(express.urlencoded({extended:true})); //used to decode the data sent through the HTML form 
router.use(express.static('frontend')); //sets as static
router.get('/form', function(req, res, next) { 
console.log("Form Received");
console.log(res);
res.render('DATE'); 
});
router.post('/DATE/create', function(req, res, next) {
  
  // store all the user input data
  const taskDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO DATA SET ?';
  db.query(sql, taskDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/DATE/form');  // redirect to user form page after inserting the data
}); 

