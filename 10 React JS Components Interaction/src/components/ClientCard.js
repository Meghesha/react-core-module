import React from 'react';

class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product: {
                prize : '',
                GST : ''
            }
        }
    }

    updateInput = (e) => {
        this.setState({
            product : {
                ...this.state.product,
                [e.target.name] : Number(e.target.value)
            }
        })
    }

    calValue = (e) => {
        e.preventDefault();
        let tax= this.state.product.prize * this.state.product.GST /100;
        let total= this.state.product.prize + tax;
        this.props.sendData(total);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <p className="h4">Product Card</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input 
                                onChange={this.updateInput}
                                value={this.state.product.prize}
                                name='prize' type="number" className="form-control" placeholder='Product Prize' />
                            </div>
                            <div className="form-group">
                                <input 
                                value={this.state.product.GST}
                                onChange={this.updateInput}
                                name='GST' type="number" className="form-control" placeholder='GST' />
                            </div>
                            <input onClick={this.calValue} type="button" value="Calculate Total" className='btn btn-secondary btn-sm' />
                        </form>
                    </div>
                </div>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
            </React.Fragment>
        );
    }
}
export default ClientCard;