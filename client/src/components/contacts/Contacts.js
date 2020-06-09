import React, { Fragment, useContext } from 'react'
import ContactItem from '../contacts/ContactItem';
import ContactContext from '../../context/contact/contactContext';


const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = contactContext;
    return (
        <Fragment>
            {contacts.map(contact => (
                  <ContactItem contact={contact} />
              ))}
        </Fragment>
    )
}

export default Contacts;