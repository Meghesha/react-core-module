import React from 'react';
import Axios from 'axios';

class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            contacts : [],
            errorMsg : ' '
        }
    } 

    componentDidMount(){
        this.getAllContacts();
     }

     getAllContacts = async() => {
        try {
            let ContactUrl = 'https://gist.githubusercontent.com/Meghesha/416db9a78dc2cfbda658fbb7c03431ff/raw/7f572c656e337bc5179a84cf5040cf86a14a9bcf/Contact-09-01-2023.json';
            let resource = await Axios.get(ContactUrl);
            this.setState({
               ...this.state,
               contacts : resource.data
            })
          } catch (error) {
           this.setState({
               ...this.state,
               errorMsg : error
           })
          }
     }

     clickContact = (contact) => {
        console.log(contact);
        this.props.sendContact(contact);
     }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                 <table className="table table-hover table-striped">
                                <thead className='table-dark text-white'>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.contacts.length > 0 ?
                                    <React.Fragment>
                                        {
                                            this.state.contacts.map(contact => {
                                                return(
                                                        <tr key={contact.id} onClick={this.clickContact.bind(this,contact)}>
                                                           <td>{contact.id}</td>
                                                           <td>{contact.name}</td>
                                                           <td>{contact.email}</td>
                                                           <td>{contact.phone}</td>
                                                           <td>{contact.address.city}</td>
                                                        </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                                 </tbody>
                            </table>
            </React.Fragment>
        );
    }
};
export default ContactList;