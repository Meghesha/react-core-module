import React  from'react';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {
                username : '',
                email : '',
                password : '',
                selectedCar : '',
                status : false
            } 
        }
    }

    updateInput = (event) => {
        if(event.target.type==='checkbox'){
            this.setState({
                user : {
                    ...this.state.user,
                    [event.target.name] : event.target.checked
                }
            })
        }else{
            this.setState({
                user : {
                    ...this.state.user,
                    [event.target.name] : event.target.value
                }
            })
        }
    }
    
    formSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.user);
    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">Register</p>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.formSubmit}>
                                            <div className="form-group">
                                                <input 
                                                name = "username"
                                                value={this.state.user.username}
                                                onChange={this.updateInput}
                                                type="text" className="form-control" placeholder="Enter your username" />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                name = "email"
                                                value={this.state.user.email}
                                                onChange={this.updateInput}
                                                type="email" className="form-control" placeholder="Enter your email Id" />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                 name = "password"
                                                 value={this.state.user.password}
                                                 onChange={this.updateInput}
                                                type="password" className="form-control" placeholder="Enter the password" />
                                            </div>
                                            <div className="for-group">
                                                <select name="selectedCar" className='form-control' onChange={this.updateInput}>
                                                    <option value="">Select A Car</option>
                                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                    <option value="Lamborghini">Lamborghini</option>
                                                    <option value="Bugatti">Bugatti</option>
                                                    <option value="Audi">Audi</option>
                                                    <option value="Volvo">Volvo</option>
                                                    <option value="Ferrari">Ferrari</option>
                                                </select>
                                            </div>
                                            <div className="form-group form-check">
                                                <input 
                                                name="status" 
                                                onChange={this.updateInput}
                                                className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                <label className="form-check-label">
                                                Terms & Conditions
                                                </label>
                                            </div>
                                            <div>
                                                <input type="submit" value="Register" className="btn btn-success btn-sm" />
                                            </div>
                                        </form>
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
export default Register;