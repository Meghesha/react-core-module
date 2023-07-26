// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TourContainer from './components/TourContainer'


let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand'>React with Bootstrap</a>
      </nav>

      <TourContainer/>
    </React.Fragment>
  );
}

export default App;


