import React from 'react';

class ChangeUsername extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : ''
        }    
    };

    updateInput = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="text-center h4">Change Username</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                 <input 
                                                value={this.state.username}
                                                onChange={this.updateInput}
                                                 type="text" className='form-control' placeholder='Username' />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <p>{this.state.username}</p>
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
export default ChangeUsername;