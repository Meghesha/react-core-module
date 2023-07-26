import React from 'react';

class SelectBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedCar : ''
        }
    }

    updateSelect = (event) => {
        this.setState({
            [event.target.name] : event.target.value  
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header bg-primary">
                                        <p className="h4">Select a Car</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <form>
                                                    <div className="form-group">
                                                        <select  name="selectedCar" className="form-control" onChange={this.updateSelect}>
                                                            <option value="">Select a Car</option>
                                                            <option value="Lamborghini">Lamborghini</option>
                                                            <option value="Mercedez">Mercedez</option>
                                                            <option value="BMW">BMW</option>
                                                            <option value="Audi">Audi</option>
                                                            <option value="Bugati">Bugati</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col">
                                                <p className="h4">{this.state.selectedCar}</p>
                                            </div>
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
};
export default SelectBox;