import React from 'react'
import './WeatherDataDisplayCSS.css'
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const WeatherDataDisplay = (props) => {
    var url = `https://openweathermap.org/img/wn/${props.icon}@2x.png`
  return (
    <div className='weather-data-div'>
        <div className='weather-main-data'>
            <div className='weather-div-temp'>
                <h2>{props.temperature}C</h2>&nbsp;&nbsp;
                <h5>|&nbsp;&nbsp;{props.type}</h5>
            </div>
            <div className='weather-div-icon'>
                <img src={url} alt="Icon" />
            </div>
        </div>
        <div className="weather-data-city">
            <h1>{props.city}, {props.country}</h1>
        </div>
        <div className="weather-div-data-info">


            <div className='display-details-main'>
                <div className='display-details-icon'>
                    <OpacityIcon fontSize='large'/>
                </div>
                <div className='display-details-info'>
                    <div>
                    {props.humidity}
                    </div>
                    <div>
                    Humidity
                    </div>
                </div>
            </div>

            <div className='display-details-main'>
                <div className='display-details-icon'>
                    <CompareArrowsIcon fontSize='large'/>
                </div>
                <div className='display-details-info'>
                    <div>
                        {props.pressure}
                    </div>
                    <div>
                        Pressure
                    </div>
                </div>
            </div>

            <div className='display-details-main'>
                <div className='display-details-icon'>
                    <AirIcon fontSize='large'/>
                </div>
                <div className='display-details-info'>
                    <div>
                        {props.speed}
                    </div>
                    <div>
                    &nbsp;&nbsp;&nbsp;Wind&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>

            <div className='display-details-main'>
                <div className='display-details-icon'>
                    <VisibilityIcon fontSize='large'/>
                </div>
                <div className='display-details-info'>
                    <div>
                        {props.visibility}
                    </div>
                    <div>
                        Visibility
                    </div>
                </div>
            </div>           
        </div>
    </div>
  )
}

export default WeatherDataDisplay
