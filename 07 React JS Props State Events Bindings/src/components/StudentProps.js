import React from 'react';

class StudentProps extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body bg-light">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                Name : {this.props.name}
                                            </li>
                                            <li className="list-group-item">
                                                Age : {this.props.age}
                                            </li>
                                            <li className="list-group-item">
                                                Designation : {this.props.designation}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
};
export default StudentProps;