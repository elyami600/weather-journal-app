// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Setup Server
const server = app.listen(port, listening);


// calback to debug 
function listening() {
    //console.log(server);
    console.log(`running on localhost: ${port}`);
    
}

// 2. Add a GET route that returns
app.get('/allData',getNewData);

function getNewData(req,res) {
    res.send(projectData)
    console.log(projectData)
}

// add a POST route that adds incoming data to projectData

app.post('/addData', addWeather);

function addWeather(req,res) {
    console.log(req.body)
    projectData["date"] = req.body.data.date;
    projectData["temp"] = req.body.data.temp;
    projectData["feel"] = req.body.data.feeling;
    
    res.send(projectData)
    console.log(projectData)

    // newEntry = {
    //     data: req.body.data,
    //     temp: req.body.temp,
    //     content:req.body.content
    // }
    
}