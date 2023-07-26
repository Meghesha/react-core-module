import React from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component{
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
                                    <div className="card-header rgba-amber-light">
                                        <p className="h3">Component A</p>
                                        <p>{JSON.stringify(this.props.user)}</p>

                                        <ComponentB user={this.props.user}/>
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
export default ComponentA;