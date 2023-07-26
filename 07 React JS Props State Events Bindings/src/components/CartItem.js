import React from 'react';

class CartItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product : {
                sno : '104sd',
                image : 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668271334/Croma%20Assets/Communication/Wearable%20Devices/Images/262052_0_ibxrul.png/mxw_1440,f_auto',
                name : 'Smart Watch',
                price : 25000,
                qty : 2
            }
        }  
    }

    incrementQty = () => {
        this.setState({
            product:{
                ...this.state.product,
                qty : this.state.product.qty + 1 
            }
        });
    };

    decrementQty = () => {
        this.setState({
            product:{
                  ...this.state.product,
                qty : (this.state.product.qty-1 > 0) ? this.state.product.qty-1 : 1
            }
        })
    }



    render(){
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Cart Items</p>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, quisquam quam. Mollitia quia ab perspiciatis similique possimus hic laudantium at deserunt accusamus praesentium eaque unde dolore quidem, porro voluptatibus delectus.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-primary table-striped">
                                    <thead className='bg-light text-dark'>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{this.state.product.sno}</td>
                                            <td>
                                                <img src={this.state.product.image} width="50" height="50" alt="" />
                                            </td>
                                            <td>{this.state.product.name}</td>
                                            <td>&#8377;{this.state.product.price}</td>
                                            <td>
                                                <i onClick={this.decrementQty}  className="fa fa-minus-circle mx-2"/>
                                                {this.state.product.qty}
                                                <i onClick={this.incrementQty} className="fa fa-plus-circle mx-2"></i>
                                            </td>
                                            <td>&#8377;{this.state.product.price * this.state.product.qty}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
};
export default CartItem;