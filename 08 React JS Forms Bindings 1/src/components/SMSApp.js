import React from 'react';

class SMSApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            maxCount : 150,
            text : ''
        }
    }

    updateText = (event) => {
        this.setState({
            ...this.state,
            text : event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">SMS Application</p>
                                    </div>
                                    <div className="card-body">
                                       <form>
                                        <div className="form-group">
                                            <textarea
                                            value={this.state.text}
                                            onChange={this.updateText}
                                            maxLength={this.state.maxCount}
                                            className='form-control' rows="5"></textarea>
                                        </div>
                                       </form>
                                       <div>
                                        <p className="h4">The Characters Remaining : {this.state.maxCount - this.state.text.length} </p>
                                       </div>
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
export default SMSApp;