var express = require('express');
var router = express.Router();
var path = require('path');
var mysql=require('../dataBase/dB')
const { runInNewContext } = require('vm');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.send("Hello! this is express developed by Sravya"); - to get normally
  // to get in bold we should use <h> tag
   res.send("<h1>Hello :) This is express developed by Sravya</h1>");
  //res.sendFile(path.resolve("public/caluculator.htm"));
});

router.get('/Calculator', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.send("Hello! this is express developed by Sravya"); - to get normally
  // to get in bold we should use <h> tag
  // res.send("<h1>Hello :) This is express developed by Sravya</h1>");
  res.sendFile(path.resolve("public/caluculator.htm"));
});

router.get('/Form', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.send("Hello! this is express developed by Sravya"); - to get normally
  // to get in bold we should use <h> tag
  // res.send("<h1>Hello :) This is express developed by Sravya</h1>");
  res.sendFile(path.resolve("public/basic_forms.htm"));
});

router.get('/RegForm', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.send("Hello! this is express developed by Sravya"); - to get normally
  // to get in bold we should use <h> tag
  // res.send("<h1>Hello :) This is express developed by Sravya</h1>");
  res.sendFile(path.resolve("public/registrationForm.htm"));
});


router.get('/lForm', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  // res.send("Hello! this is express developed by Sravya"); - to get normally
  // to get in bold we should use <h> tag
  // res.send("<h1>Hello :) This is express developed by Sravya</h1>");
  res.sendFile(path.resolve("public/lForm.htm"));
});


router.post('/loginForm', function(req, res, next) {
    //res.render('index', { title: 'Express' });
   //res.send("<h2>Hello This Is Express Developed By Saranya</h2>");
   var Name=req.body.name
   var MailID =req.body.userid
   var pwd = req.body.pwd
   var output = "<table border = 1> <tr><td>Name <td>"+Name+"<tr><td>Mail id <td>"+MailID+"<tr><td>Password <td>"+pwd;
   res.send(output)
   });

   router.get('/demo', function(req, res, next) {
    res.render('index',{title: 'Embedded java code complete'});
  });

   router.get('/demo1', function(req, res, next) {
    res.render('index1',{title: 'Embedded java code complete' ,name:'Sravya'});
  });



  router.get('/fbposts', function(req, res, next) {
    var posts = [
      {title: 'HBD' ,message: 'Happy birthday to you!'},
      {title: 'Casual' ,message:'Hello! How are you?'},
      {title: 'Announcement' ,message:'Bheemlanayak! movie is releasing'},
      {title: 'Greetings', message:'Greetngs of the day'},
      {title: 'Events' ,message:"Half saree event"},
    ];
    res.render('fbposts',{title: 'Facebook Posts',posts:posts});
  });

  router.get('/selectqry', function(req, res, next) {
    mysql.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('select * from student limit 2', (err, rows) => {
      connection.release(); 
    if(err) throw err;
      res.render('dB', {rows:rows , title : 'Student Details'});
      // res.send(rows);
    });
    });
    });




module.exports = router;
// /* <table border=1><tr><td>Name</td>"+Name+"</tr><tr><td>MailID</td>"+MailID+"</tr><tr><td>password</td></tr>"+pwd; */