import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
 const WeatherApp = () => {
    let api_key = "21ff35f4a3b6ab6a8ecd249974d96198"
    const search = async () => {
        const element = document.getElementsByClassName("entercity")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-speed")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = data.main.temp+"°c";
        location[0].innerHTML = data.name;
    }
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="entercity" placeholder='search' />
            <div className="search-icon">
                <img src={search_icon} onClick={()=>{search()}} alt="" />
            </div>
        </div>
        <div className="weather-img">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">Kathmandu</div>
        <div className="data-container">
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
                </div>
                <div className="data">
                <div className="wind-speed">18km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>

    </div>
  )
}
export default WeatherApp