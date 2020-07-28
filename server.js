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
const port = process.env.PORT || 3000;

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
    console.log("req.body ~> ",req.body)
    // if(req.body) {
    //     console.log("got here")
    //     projectData = req.body;
    // }
    projectData.data = req.body.data;
    projectData.temp = req.body.temp;
    projectData.feel = req.body.feel;

    // projectData["date"] = req.body.date;
    // projectData["temp"] = req.body.temp;
    // projectData["feel"] = req.body.feel;
    
    res.send(projectData)
    console.log("projectData ~>",projectData)

}
