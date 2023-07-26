import React from 'react';
import './App.css';
// import HobbySelectorRadio from './components/HobbySelectorRadio';
// import AuthCard from './components/AuthCard';
// import HobbySelectorCheckBox from './components/HobbySelectorCheckBox';
import Employees from './components/Employees'


let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Conditionals & Loopings</a>
      </nav>

     {/* <AuthCard/> */}
     {/* <HobbySelectorCheckBox/> */}
     {/* <HobbySelectorRadio/> */}
     <Employees/>

    </React.Fragment>
  );
}

export default App;


