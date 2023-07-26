import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      user:{
        name : 'Meghesh',
        degree : "BE"
      }
    }
  }
  
  render() {
    return (
      <React.Fragment>
      <section className="p-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="card">
                          <div className="card-header rgba-green-light">
                              <p className="h3">App Component</p>
                              <p>{JSON.stringify(this.state.user)}</p>
                             
                              <ComponentA user={this.state.user}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
  </React.Fragment>
    );
  }
};
export default App;


