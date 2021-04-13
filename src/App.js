import React, { Component } from 'react';
import './App.css';
import Weather from './components/weather.components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './components/form.components';

const API_key = '7bf285d5ee2aba13f474529bc681d058';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: '',
      error: false
    };
    
    this.weatherIcon = {
      Sunny: 'wi-day-sunny',
      Clouds: 'wi-cloud',
      Drizzle: 'wi-sleet',
      Snow: 'wi-snow',
      Rain: 'wi-rain',
      Atmosphere: 'wi-fog'
    };
  }

  //weather-conditions
  get_WeatherIcon(icons, rangeId) {
    switch(true) {
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Sunny})
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon:this.weatherIcon.Clouds})
        break;
      case rangeId >= 300 && rangeId <= 322:
        this.setState({icon:this.weatherIcon.Drizzle})
        break;
      case rangeId >= 600 && rangeId <= 623:
        this.setState({icon:this.weatherIcon.Snow})
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon:this.weatherIcon.Rain})
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon:this.weatherIcon.Atmosphere})
        break;
    }
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_key}`);

      const response = await api_call.json();

      console.log(response);

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        celsius: response.main.temp,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].description,
        error: false
    });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    }else{
      this.setState({error:true});
    }
   
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather 
        city={this.state.city} country={this.state.country} 
        temp_celsius={this.state.celsius} temp_max={this.state.temp_max} 
        temp_min={this.state.temp_min} description={this.state.description}
        weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
