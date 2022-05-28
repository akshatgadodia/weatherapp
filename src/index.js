import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import TopBar from './TopBar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TopBar/>
    <Weather/>
  </>
);
