import React from 'react';

class StudentState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            students : [
                {
                    name : "Meghesh",
                    age : 28,
                    degree : "BE"
                },
                {
                    name : "Lakshmi Kanth Reddy",
                    age : 26,
                    degree : "MBA"
                }
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card my-2">
                                    <div className="card-body bg-primary">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                Name : {this.state.students[0].name}
                                            </li>
                                            <li className="list-group-item">
                                                Age : {this.state.students[0].age}
                                            </li>
                                            <li className="list-group-item">
                                                Degree : {this.state.students[0].degree}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card my-2">
                                    <div className="card-body bg-primary">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                Name : {this.state.students[1].name}
                                            </li>
                                            <li className="list-group-item">
                                                Age : {this.state.students[1].age}
                                            </li>
                                            <li className="list-group-item">
                                                Degree : {this.state.students[1].degree}
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
export default StudentState;