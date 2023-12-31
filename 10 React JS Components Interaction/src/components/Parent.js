import React from 'react';
import Child from './Child';
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pText : 'Hi, Im from Parent Component',
            cText : ''

        }
    }

    recieveData = (value) => {
        this.setState({
            ...this.state,
            cText : value
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body rgba-purple-light">
                                        <p className="h4">Parent</p>
                                        <p>{this.state.cText}</p>
                                        <Child pText={this.state.pText} sendData={this.recieveData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Parent;