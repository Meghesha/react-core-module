import React from 'react';
import ChildCard from './ChildCard';

class ParentCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           pText : '',
           ctext:''
        }
    }

    updateText = (e) => {
        this.setState({
            pText : e.target.value
        })
    }

    receiveData = (value) => {
        this.setState({
            ...this.state,
            cText : value

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
                                <div className="card ">
                                    <div className="card-header rgba-amber-light">
                                        <p className="h3">Parent Card</p>
                                        <p>{this.state.cText}</p>
                                    </div>
                                    <div className="card-body rgba-amber-light">
                                        <form className='form-inline'>
                                            <div className="form-group">
                                                <input 
                                                value={this.state.pText}
                                                onChange={this.updateText}
                                                type="text" className='form-control' placeholder='Parent Text'/>
                                            </div>
                                        </form>
                                        <ChildCard pText={this.state.pText} sendData={this.receiveData}/>
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
export default ParentCard;