import React from 'react';

class HobbySelectorRadio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hobby : null
        }
    }

    updateRadio = (event) => {
        this.setState({
            hobby : event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Hobby Selector</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                            <div class="form-check">
                                                <input onClick={this.updateRadio} class="form-check-input" type="radio" name="success" id="exampleRadios1" value="success"/>
                                                <label class="form-check-label" for="exampleRadios1">
                                                    Success
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input onClick={this.updateRadio} class="form-check-input" type="radio" name="warning" id="exampleRadios2" value="warning"/>
                                                <label class="form-check-label" for="exampleRadios2">
                                                    Warning
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input onClick={this.updateRadio} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="danger"/>
                                                <label class="form-check-label" for="exampleRadios3">
                                                    Danger
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-md-9">
                                                {
                                                    this.state.hobby=== 'success' &&
                                                    <div className="card m-2 animated jello">
                                                      <div className="card-body bg-success text-white" style=  {{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Success</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                    </div>
                                                }
                                                {
                                                    this.state.hobby==='warning' &&
                                                    <div className="card m-2 animated shake">
                                                    <div className="card-body bg-warning text-white" style={{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Warning</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                    </div>
                                                    </div>
                                                }
                                                
                                                {  
                                                    this.state.hobby==='danger' &&
                                                    <div className="card m-2 animated tada">
                                                    <div className="card-body bg-danger text-white" style={{borderRadius : '5px'}}>
                                                          <p className="h4"><i className="fa fa-check-circle"/>Danger</p>
                                                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                  </div>

                                                }
                                              
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
export default HobbySelectorRadio;