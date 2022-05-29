import React from 'react'
import {useState, useEffect} from 'react'
import './WeatherCSS.css'
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDataDisplay from './WeatherDataDisplay';

const Weather = () => {
  const [search, setSearch] = useState(("Delhi"));
  const [city,setCity] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=836311ac7ebdf39b12c7f304e0d6c33f&units=metric`;
      const response = await fetch(url);
      if(response.status===200){
        const resJson = await response.json();
        setCity(resJson)
      }
    });
  },[]);
  useEffect(() => {
    const getData = async () => {
      if(search===''){
        setCity(null)
      }
      else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=836311ac7ebdf39b12c7f304e0d6c33f&units=metric`;
        const response = await fetch(url);
        if(response.status===404){
          setCity(null)
        }
        else{
          const resJson = await response.json();
          setCity(resJson)
        }
      } 
      
    };
    getData();
  },[search]);
  
  return (
    <div className='weather-main'>
        <div className='weather-inside'>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter Your City Name"
            className="mb-3 weather-inside-search"
           >
            <Form.Control type="text" placeholder="Enter Your City Name" className='weather-inside-search-field' 
                          onChange={(event)=>{setSearch(event.target.value)}}/>
          </FloatingLabel>
          <div className='weather-data'>
          {
            !city
            ? (<span><h2>No Data Found</h2></span>)
            :(
                <WeatherDataDisplay 
                temperature={city.main.temp} type={city.weather[0].main} icon={city.weather[0].icon}
                humidity={city.main.humidity} pressure={city.main.pressure}
                speed={city.wind.speed} city={city.name} country={city.sys.country} visibility={city.visibility}
                />
            )}
          </div>
        </div>
    </div>
  )
}

export default Weather