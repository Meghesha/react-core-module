import React from 'react';

class WishMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : "Hi"
        }  
    }

    sayGoodMorning = () => {
        this.setState({
            message : "Good Morning"
        })
    }

    sayGoodAfternoon = (value) =>{
        this.setState({
            message : value
        })
    }

    render(){
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">WishMessage</p>
                                    </div>
                                    <div className="card-body">
                                       <h2>{this.state.message}</h2>
                                      <button className='btn btn-success btn-sm' onClick={this.sayGoodMorning}>Good Morning</button>
                                      <button onClick={this.sayGoodAfternoon.bind(this,"Good Afternoon")} className='btn btn-warning btn-sm'>Good Afternoon</button>
                                      <button onClick={() => {this.setState({message:'Good Evening'})}} className='btn btn-danger btn-sm'>Good Evening</button>
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
export default WishMessage;