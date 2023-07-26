import React from 'react';

class Child extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cText : 'Hello, Im from Child Component'
        }
    }

    clickSend = () => {
        this.props.sendData(this.state.cText);
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body rgba-green-light">
                                        <p className="h4">Child</p>
                                        <p>{this.props.pText}</p>
                                        <button className='btn btn-primary btn-sm' onClick={this.clickSend}>Send</button>
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
export default Child;