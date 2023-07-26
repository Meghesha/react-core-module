import React from 'react';

class ComponentC extends React.Component{
    constructor(props) {
        super(props);
     
    }

    render() {
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-pink-light">
                                        <p className="h3">Component C</p>
                                        <p>{JSON.stringify(this.props.user)}</p>

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
export default ComponentC;