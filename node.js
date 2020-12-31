var express=require('express')
var cors=require('cors')
var app=express()
var fs=require('fs')
var bodyParser=require('body-parser')
const http = require('http');

const hostname = 'https://';
const port = 3000;


app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://rishak192:Mongodb@192@firstproject.8maq4.mongodb.net/UserData?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

const dbName = "UserData";

app.get('/',function(req,res){
  res.send("Hello")
})


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});
