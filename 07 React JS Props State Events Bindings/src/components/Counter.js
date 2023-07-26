import React from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:{
                counter : 0,
                name : "Meghesh",
                designation : "Software Enginner"
            }
        }  
    }

    counterIncrement = () => {
        this.setState({
            count:{
                ...this.state.count,
                counter : this.state.count.counter + 1,
                age : 28
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Counter</p>
                                    </div>
                                    <div className="card-body">
                                      <h2>{this.state.count.counter}</h2>
                                      <button className='btn btn-primary btn-sm' onClick={this.counterIncrement}>Increment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
};
export default Counter;