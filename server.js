//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var request = require('request');
var twilio = require('twilio')
var fireBase = require('firebase')

var ref = new fireBase('text-support-erik.firebaseIO.com')

// Twilio Credentials 
var accountSid = 'ACbb42949d459afbf800d030fafc3564fc';
var authToken = '990602fb2f0c1152fd9a67d827c86d6c'; 
 
//require the Twilio module and create a REST client 
var client = twilio(accountSid, authToken);

var app = express();
var port = 3000;


//#####################################################
//Middelware:
//#####################################################
app.use(express.static('public'));

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
app.use(bodyParser.json());

app.use(cors());

var message = {
	"message": "hello fucker"
}
app.use(express.static(__dirname + '/public'));
//#####################################################
//endPoints:
//#####################################################

app.get('/api/message', function (req, res) {
	return res.json(message);
});
app.post('/api/send_text_message', function (req, res) {
	console.log(req.body.message);
	client.messages.create({
		to: "14359947197",
		from: "+14357740169",
		body: req.body.message,
	}, function (err, message) {
		console.log(message.sid);
	});
});


app.listen(port, function () {
	console.log('I\m watching you...', port);
});

