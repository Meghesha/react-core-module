import React from 'react';

class Employee extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h3>Name : {this.props.name}</h3>
                        <h4>age : {this.props.age}</h4>
                        <h4>Designation : {this.props.designation}</h4>
                    </div>
                </div>

            </React.Fragment>
        )
    }

};
export default Employee;