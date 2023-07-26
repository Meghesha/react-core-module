import React from 'react';
import './App.css';
// import DigitalWatch from './components/DigitalWatch';
// import UserList from './components/UserList';
import UserListButton from './components/UserListButton'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Http with Axios</a>
      </nav>
      {/* <DigitalWatch/> */}

      {/* <UserList/> */}
      <UserListButton/>
      
      
  </React.Fragment>
    );
  }
};
export default App;


