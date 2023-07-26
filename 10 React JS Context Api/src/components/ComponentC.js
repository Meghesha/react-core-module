import React from 'react';
import { UserContext } from './context/UserContext';

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

                                        <UserContext.Consumer>
                                            {
                                                 (user) => {
                                                    return(
                                                        <small>{JSON.stringify(user)}</small>
                                                    )
                                                }
                                            }
                                        </UserContext.Consumer>

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