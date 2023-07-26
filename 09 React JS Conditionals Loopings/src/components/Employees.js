import React from 'react';

class Employees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees :[
                {
                    id : 'ABC100',
                    name : 'Meghesh',
                    age : 28,
                    degree : 'BE',
                    location : 'Karnataka'
                },
                {
                    id : 'ABC101',
                    name : 'Lakshmi Kanth',
                    age : 26,
                    degree : 'MBA',
                    location : 'Andhra Pradesh'
                },
                {
                    id : 'ABC102',
                    name : 'Rajesh',
                    age : 23,
                    degree : 'BTech',
                    location : 'Chennai'
                },
                {
                    id : 'ABC103',
                    name : 'Perumal',
                    age : 27,
                    degree : 'BTech',
                    location : 'Koimattur'
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                this.state.employees.map((employee) => {
                                    return(
                                        <div key={employee.id} className="card m-3">
                                            <div className="card-body rgba-purple-light">
                                             <ul className='list-group'>
                                                <li className='list-group-item'>Id       : {employee.id}</li>
                                                <li className='list-group-item'>Name     : {employee.name}</li>
                                                <li className='list-group-item'>Age      : {employee.age}</li>
                                                <li className='list-group-item'>Degree   : {employee.degree}</li>
                                                <li className='list-group-item'>Location : {employee.location}</li>
                                             </ul>
                                            </div>
                                        </div>
                                    )
                                })
                                };  
                                
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
};
export default Employees;