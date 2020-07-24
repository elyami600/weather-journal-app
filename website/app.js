/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+' . '+ d.getDate()+' . '+ d.getFullYear();
console.log(newDate)


const country = 'us'
// Personal API Key for OpenWeatherMap API
const apiKey= '2ac5ba4c687c280d05f418225e560ebd';
// let baseURL = `api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&appid=${APIKEY}`;
//let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + APIKEY


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',perforAction);


/* Function called by event listener */
function perforAction(e) {
    const $zipCode  = document.getElementById('zip').value;
    const $feeling  = document.getElementById('feelings').value

    getWheaterData($zipCode)
    .then(data => {
        console.log("data ~>",data)
        postData("http://localhost:3000/addData", {data: newDate, temp: data.main.temp, feel: $feeling});

        updataUI()
    
    });
}

/* Function to GET Web API Data*/
const getWheaterData = async($zipCode) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${$zipCode}&units=imperial&appid=${apiKey}`);

    try {
        const data = res.json();
         //console.log(data)
         return data

    }catch(error){
        console.log('error ', error)

    }
}

/* Function to POST data */
const postData = async ( url = '', data = {}) => {
    // console.log(data)
    const response = await fetch(url, {
        method:'POST',
        credentials:'same-origin',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify(data),

    });
    try {
        const newData = await response.json();
        console.log(newData)
        return newData

    }catch(error){
        console.log('error', error)
    }
} 



/* Function to GET Project Data */
const updataUI = async () => { 
    const request = await fetch('http://localhost:3000/allData')


    try {
        const allData =await request.json();
        console.log('allData', allData)
        document.getElementById('date').innerHTML    = allData.data;
        document.getElementById('temp').innerHTML    = allData.temp;
        document.getElementById('content').innerHTML = allData.feel;


    }catch(error) {
        console.log('error ', error)
    }
}