import React from 'react';

class AuthCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false
        }
    }

    login = () => {
        this.setState({
            isLogged : true
        })
    }

    logout = () => {
        this.setState({
            isLogged : false
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">Auth Card</p>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.isLogged ?
                                            <button onClick={this.logout} className="btn btn-danger btn-sm">LogOut</button>  : 
                                            <button onClick={this.login} className="btn btn-success btn-sm">Login</button>
                                       
                                        }
                                        
                                        {
                                                this.state.isLogged ?
                                                <React.Fragment>
                                                     <p className="h4">Welcome User!</p>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment> :
                                                <React.Fragment>
                                                     <p className="h4">Welcome Guest User!</p>
                                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment>
                                        }
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
export default AuthCard;