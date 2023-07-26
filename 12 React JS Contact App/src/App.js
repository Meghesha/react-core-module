import React from 'react';
import './App.css';
import ContactApp from './components/ContactApp';

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
        <a href="/" className="navbar-brand">React Contact App</a>
      </nav>

      <ContactApp/>
  </React.Fragment>
    );
  }
};
export default App;


