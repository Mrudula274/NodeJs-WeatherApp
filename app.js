const express = require('express');
const { response } = require('express') 
const https = require('https');
const app = express();
const body = require('body-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{

    res.sendFile(__dirname + "/index.html");
    
})
app.post('/',(req,res) =>{
    //console.log("The request is recived");
    //console.log(req.body.CityName);
    
const query = req.body.CityName
const apiKey = '0090b2c6401b14130793c65eab050054'
const url ='https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey+'';
https.get(url,(response)=>{
    //console.log(response)
    response.on('data',(data) => {
       // console.log(data);
       const weatherdata = JSON.parse(data)
       //console.log(weatherdata) 
       const temp = weatherdata.main.temp;
      // console.log(temp);
       const description = weatherdata.weather[0].description
       //console.log(description);
       res.write("<h1>The tempreature in "+query+" is " + temp + "degree celcius</h1>")
       res.write("<p>The weather description is "+description+"</p>")
        res.write("<h3>CI/CD : Continuous Integration and Continuouse Deployment</h3>")
    })
})
// res.send("This is for checking our server")
})


app.listen(3000 , ()=>console.log("Our server is running at port 3000"))
