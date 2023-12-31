import React from 'react';

class ChildCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cText : ''
        }
    }

    updateText = (e) => {
        this.setState({
            cText : e.target.value
        });
        this.props.sendData(e.target.value);
    }


    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-green-light">
                                        <p className="h3">Child Card</p>
                                        <p>{this.props.pText}</p>
                                    </div>
                                    <div className="card-body rgba-green-light">
                                        <form className='form-inline'>
                                            <div className="form-group">
                                                <input 
                                                value={this.state.cText}
                                                onChange={this.updateText}
                                                type="text" className='form-control' placeholder='Child Text' />
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
}
export default ChildCard;