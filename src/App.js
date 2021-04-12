import React, { Component } from 'react';
import './App.css';
import Weather from './components/weather.components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const API_key = '7bf285d5ee2aba13f474529bc681d058';

class App extends React.Component {
  constructor() {
    super();
    this.state={}
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=${API_key}`)

    const response = await api_call.json();

    console.log(response);
  }

  state = {}
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
