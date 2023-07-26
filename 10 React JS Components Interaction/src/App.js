import React from 'react';
import './App.css';
// import Parent from './components/Parent';
// import ParentCard from './components/ParentCard';
import ClientCard from './components/ClientCard';
import ServerCard from './components/ServerCard';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      total : 0

    }
  }

  receiveData = (value) =>{
    this.setState({
      total : value
    })
  }
  
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand">React with Components Interaction</a>
      </nav>

     {/* <Parent/> */}
     {/* <ParentCard/> */}

     <section className="p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ClientCard sendData={this.receiveData}/>
          </div>
          <div className="col-md-4">
            <ServerCard total={this.state.total}/>
          </div>
        </div>
      </div>
     </section>
     

    </React.Fragment>
    );
  }
};
export default App;


