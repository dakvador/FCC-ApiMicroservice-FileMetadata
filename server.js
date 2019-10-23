var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer();

// require and use "multer"...

var app = express();

var fileName = "";
var fileType = "";
var fileSize = 0;



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile') ,function(req,res,next){

  var fileName = req.file.originalname;
  var fileType = req.file.mimetype;
  var fileSize = req.file.size;

res.send(`{"name":"${fileName}","type":"${fileType}","size":${fileSize}}`)
})






app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
