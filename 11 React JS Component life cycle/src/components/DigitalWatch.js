import React from 'react';

class DigitalWatch extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            displayTime : new Date().toLocaleTimeString()
        }
    }

    // When component is fully loaded on DOM
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                displayTime : new Date().toLocaleTimeString()
            })
        },1000);
    }

    // When the component is removed from the DOM
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-info text-white">
                                        <p className="h4">Digital Watch</p>
                                    </div>
                                    <div className="card-body rgba-amber-light text-center">
                                        <h1 className='display-3'>{this.state.displayTime}</h1>
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
export default DigitalWatch;