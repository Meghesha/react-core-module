import React from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

class ContactApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedContact : {}
        }
    }

    recieveContact = (value) => {
        this.setState({
            selectedContact : value
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-primary">Contact List App</h4>
                                <h4 className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae tempore quisquam quibusdam. Expedita quo aliquid, voluptatum animi suscipit consequuntur.</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                            <ContactList sendContact={this.recieveContact}/>
                            </div>
                            <div className="col-md-3">
                                <ContactCard selectedContact={this.state.selectedContact}/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
};
export default ContactApp;