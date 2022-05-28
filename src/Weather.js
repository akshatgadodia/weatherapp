import React from 'react'
import './WeatherCSS.css'

const Weather = () => {
  /*https://api.weatherapi.com/v1/current.json?key=634a6ffaa3f44bb889e194203222805&q=jaipur*/
  return (
    <div className='weather-main'>
        <div className='weather-inside'>
           <div className='weather-inside-fields'>
               <input type="text" placeholder='Enter City Name' className='weather-inside-text'/>
               <input type="submit" className='weather-inside-submit' value="Search" onClick={()=>{console.log("HEY")}}/>
           </div>
        </div>
    </div>
  )
}

export default Weather