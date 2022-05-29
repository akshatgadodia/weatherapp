import React from 'react'
import'./TopBarCSS.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const TopBar = () => {
  return (
    
    <div className='top-bar'>
        <span className='top-bar-head'><WbSunnyIcon className='top-bar-head-icon' fontSize='large'/>
        WEATHER<WbSunnyIcon className='top-bar-head-icon' fontSize='large'/></span>
        <span className="top-bar-info"><a href="https://akshatgadodia.github.io/personalwebsite/" target='_blank' rel="noreferrer">
          About Me</a></span>
    </div>
  )
}

export default TopBar