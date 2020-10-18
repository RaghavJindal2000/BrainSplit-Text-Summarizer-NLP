var spawn = require('child_process').spawn;
var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage }).array('file')

app.get('/', function (req, res) {
  console.log('Server is up and running')

})

const PathName = (path) => {
  console.log(path)
}
app.post('/upload',async function (req, res) {

  upload(req, res, async function (err) {

    if (err instanceof multer.MulterError) {
      console.log(err)
      return res.status(500).json(err)
      // A Multer error occurred when uploading.
    } else if (err) {
      console.log(err)
      return res.status(500).json(err)

      // An unknown error occurred when uploading.
    }
    else
    {
    console.log(req.files[0].path)
    var process = spawn('python', ['./cm.py',req.files[0].path]);
    process.stdout.on('data', function(data) { 
      // console.log(dataToSend)
      res.send(data.toString()); 
    } ) 
  }
  })
});

app.listen(8000, function () {
  console.log('App running on port 8000');
});