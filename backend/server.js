require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ScheduleSchema = new Schema(
{
  scheduleId: String,
  name: String,
  email: String,
  phonenumber: String,
  service: String,
  datetime: Date,
},
{ 
  collection: 'schedule' 
}
);

ScheduleSchema.set('collection', 'schedule');
var collectionName = 'schedule'
const conn = mongoose.createConnection('mongodb+srv://<username>:<password>@cluster0.ri7go.mongodb.net/<dbname>',{ useNewUrlParser: true,useUnifiedTopology: true });
var Schedule = conn.model('schedule', ScheduleSchema, collectionName );

let scheduleData = {};
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
 
app.post('/schedule/appointment', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const service = req.body.service;
  const datetime = req.body.datetime;
  console.log(name)
  console.log(email)
  console.log(phonenumber)
  console.log(datetime)

  if (!name || !email || !phonenumber || !service ||!datetime) {
    return res.status(400).json({
      error: true,
      message: "Name or email or phonenumber or service or date or time is missing"
    });
  } else {
    scheduleData.scheduleId = Math.random().toString(36).substring(6);
    scheduleData.name = name;
    scheduleData.email = email;
    scheduleData.phonenumber = phonenumber;
    scheduleData.service = service;
    scheduleData.datetime = datetime;
    Schedule.create(scheduleData);
    return res.status(200).json({
      error: false,
      message: "Appointment is successful!!!."
    });

  }

});
 
 
app.listen(port, () => {
  console.log('Server started on: ' + port);
});