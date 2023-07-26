import React from 'react';
import './App.css';
// import ChangePassword from './components/ChangePassword';
// import ChangeUsername from './components/ChangeUsername';
// import Login from './components/Login';
// import SelectBox from './components/SelectBox';
// import Register from './components/Register';
import SMSApp from './components/SMSApp'

let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Forms Binding</a>
      </nav>

      {/* <ChangeUsername/> */}
      {/* <Login/> */}
      {/* <SelectBox/> */}
      {/* <ChangePassword/> */}
      {/* <Register/> */}
      <SMSApp/>
    </React.Fragment>
  );
}

export default App;


