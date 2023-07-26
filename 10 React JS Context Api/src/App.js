import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { UserContext } from './components/context/UserContext';

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

                              <UserContext.Provider value={this.state.user}>
                                <ComponentA/>
                              </UserContext.Provider>
                             
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


