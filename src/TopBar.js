import React from 'react'
import'./TopBarCSS.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const TopBar = () => {
  return (
    
    <div className='top-bar'>
        <span className='top-bar-head'><WbSunnyIcon className='top-bar-head-icon'/>
        Weather<WbSunnyIcon className='top-bar-head-icon'/></span>
        <span className="top-bar-info"><a href="">About Me</a></span>
    </div>
  )
}

export default TopBar