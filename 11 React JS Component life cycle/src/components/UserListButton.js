import React from 'react';
import Axios from 'axios';

class UserListButton extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            users : [],
            errorMessage : ''
        }
    }

    showTable = () => {
        // this.getAllUsers();
        this.getAllAsyncUsers();
    }

    getAllAsyncUsers = async() => {
        try {
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response =await Axios.get(dataURL);
            this.setState({
                ...this.state,
                users : response.data
            })
        } catch (error) {
            this.setState({
                ...this.state,
                errorMessage : error
            })
        }
    }

    getAllUsers = () => {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            // console.log(response.data);
            this.setState({
                ...this.state,
                users : response.data
            })
        }).catch((error) => {
            // console.error(error);
            this.setState({
                ...this.state,
                errorMessage : error
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
                <section className="p-3">
                 <div className="conatiner">
                    <div className="row">
                        <div className="col-10 m-auto">
                          <p className="h2 text-primary">User List</p>
                          <p className="h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe iure  repellat quaerat iusto voluptate odit expedita modi temporibus eum.</p>
                        </div>
                    </div>
                    <button onClick={this.showTable} className='btn btn-secondary btn-sm'>Show Table</button>
                    <div className="row">
                        <div className="col-10 m-auto">
                            {
                                this.state.users.length > 0 ?
                                <React.Fragment>
                                    <table className="table table-hover table-striped text-center">
                                        <thead className="bg-dark text-warning">
                                            <tr>
                                                <th>SNO</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>ZipCode</th>
                                                <th>Website</th>
                                            </tr>
                                        </thead>
                                        <tbody className='rgba-blue-light'>
                                            {
                                                this.state.users.map((user) => {
                                                    return(
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.address.zipcode}</td>
                                                            <td>{user.website}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                </React.Fragment> : null
                            }
                        </div>
                    </div>
                 </div>
                </section>
            </React.Fragment>
        );
    }
    
};
export default UserListButton;