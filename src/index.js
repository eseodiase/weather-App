import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Aboutpage, Header } from './App'; //new
import './App.css';

    const apikey = "0751b24cdf6d539e6f2bdfc798aa3f0f" 

function c(m){
    return document.querySelector(m)
}

window.onload = function() {


async function fetchData(city){

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const res = await fetch(url);
    
const data = await res.json();
    
    

updateData(data.weather[0].description, data.main.temp, data.main.humidity)

}

const inputRef = c("#search-input") 

function updateData(desc, temp, humidity){
    c("#desc").innerText = desc;
    c("#temp").innerText = Math.round(temp - 272) + "°C";
    c("#humidity").innerText = humidity +"%";
}
      
fetchData("Benin City")   
        
inputRef.addEventListener("search", () => {
   fetchData(inputRef.value)
})
    
}
    
    const myCity = "Benin City";
    const weatherApp = <section className="grid-container">
        <div id="header" className="header">
            <nav>
                <ul>
                    <li>CityWeather</li>
                </ul>
            </nav>
            <h3>
            Search Weather By City Name
            </h3>
        </div> 
        
        <div id="main" className="main">
            <label>City name: </label>
            <input type="search" id="search-input" defaultValue={myCity} />
            
            <h2 id="desc">This may take a minute...</h2>
            <div id="info">
            <label>Temperature: </label>
            <span id="temp"></span>
            <br/>
            <label>Humidity: </label>
            <span id="humidity"></span>
            </div>
        </div> 
        
        <div id="footer" className="footer">
            <p id="footerTxt">
                Developed by 
  <a href="https://eseodiase.website/">
                <span> Ese Odiase</span>
                </a>
            </p>
        </div> 
        
        </section>;

    
    ReactDOM.render(
        weatherApp,
        document.getElementById("root")
        );
