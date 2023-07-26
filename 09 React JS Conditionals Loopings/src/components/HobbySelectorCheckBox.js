import React from 'react';

class HobbySelectorCheckBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hobby : {
                eating : false,
                coding : false,
                sleeping : false
            }
        }
    }

    updateCheck = (event) => {
        this.setState({
            hobby : {
                ...this.state.hobby,
                [event.target.name] : event.target.checked
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
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
                                                <input name='eating' onClick={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input name='coding' onClick={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label class="form-check-label" for="defaultCheck2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input name='sleeping' onClick={this.updateCheck} class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label class="form-check-label" for="defaultCheck2">
                                                    Sleeping
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-md-9">
                                                {
                                                    this.state.hobby.eating &&
                                                    <div className="card m-2 animated jello">
                                                      <div className="card-body bg-success text-white" style=  {{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Eating</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                    </div>
                                                }
                                                {
                                                    this.state.hobby.coding &&
                                                    <div className="card m-2 animated shake">
                                                    <div className="card-body bg-warning text-white" style={{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Coding</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                    </div>
                                                    </div>
                                                }
                                                
                                                {  
                                                    this.state.hobby.sleeping &&
                                                    <div className="card m-2 animated tada">
                                                    <div className="card-body bg-danger text-white" style={{borderRadius : '5px'}}>
                                                          <p className="h4"><i className="fa fa-check-circle"/>Sleeping</p>
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
export default HobbySelectorCheckBox;