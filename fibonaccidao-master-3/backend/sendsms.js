
require('dotenv').config();

const accountSid = process.env.REACT_APP_accountSid ;
const authToken = process.env.REACT_APP_authToken ;
const client = require('twilio')(accountSid, authToken);

function sms() { 
client.messages 
      .create({ 
         body: 'hey', 
         from: '+17473023807', 
         messagingServiceSid: 'MG525827803e81dd6db9ef4048930c8072',      
         to: '+16473279119' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      }