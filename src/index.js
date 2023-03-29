const http = require('http');
const path =require('path');
const express = require('express');
const socketio = require('socket.io');

require('dotenv').config();



const app = express(); 
const server = http.createServer(app);
const io = new socketio.Server(server);

//db connection


 
 
app.set('port',process.env.PORT || 3000); 
require('./sockets')(io); 

//static files
app.use(express.static(path.join(__dirname,'public')));

//start server
server.listen( process.env.PORT || 3000,()=>{
    console.log('server on port ' +app.get('port'));
}); 
 
/*

const OPENAI_API_KEY = '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';

const { Configuration, OpenAIApi }= require('openai');
const configuration = new Configuration({
    organization: "org-s30mzJb3q6Nm6Im6pEhPyp7a",
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = async ()=>{
    var value = await openai.listModels();
    openai.createTranslation
    console.log(value);
    return value;
};
response();
*/
