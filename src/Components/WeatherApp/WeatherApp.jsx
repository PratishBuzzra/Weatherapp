import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';

const WeatherApp = () => {
  const [api_key] = useState("21ff35f4a3b6ab6a8ecd249974d96198");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const search = async () => {
    const element = document.getElementsByClassName("entercity");
    const inputValue = element[0].value;

    if (inputValue === "") {
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();

      const humidity = data.main.humidity + "%";
      const windSpeed = data.wind.speed + " km/h";
      const temperature = data.main.temp + "°C";
      const location = data.name;

      setWeatherData({ humidity, windSpeed, temperature, location });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    //search(); 
  }, []);

  return (
    <div className='container'>
      <div className="top-bar">
        <input
          type="text"
          className="entercity"
          placeholder='search'
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <div className="search-icon">
          <img src={search_icon} onClick={search} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">{weatherData?.temperature || "Loading"}</div>
      <div className="weather-location">{weatherData?.location || "Loading"}</div>
      <div className="data-container">
        <div className="data">
          <div className="humidity-percent">{weatherData?.humidity || "Loading"}</div>
          <div className="text">Humidity</div>
        </div>
        <div className="data">
          <div className="wind-speed">{weatherData?.windSpeed || "Loading"}</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
