import React from 'react';
import './App.css';
import GithubProfileSearch from './components/GithubProfileSearch';


let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Github Profile Search Application</a>
      </nav>

      <GithubProfileSearch/>
    </React.Fragment>
  );
}

export default App;


