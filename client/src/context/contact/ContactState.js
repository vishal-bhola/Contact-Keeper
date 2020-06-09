import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
 } from '../types';

 const ContactState = props => {
     const initialState = {
         contacts: [
            {
                id: 1,
                name: "khushboo",
                email: "khushboo@gmail.com",
                phone: "111-222-333",
                type: "personal"
            },
            {
                id: 2,
                name: "khusasdhboo",
                email: "khuoo@gmail.com",
                phone: "111-222-33454",
                type: "personal"
            },
            {
                id: 3,
                name: "khushb",
                email: "khusho@gmail.com",
                phone: "111-22-333",
                type: "professional"
            }
        ]
     };

     const [state, dispatch] = useReducer(ContactReducer, initialState);


     // Add Contact

     // Delete Contact

     // Set Current Contact

     // Clear Current Contact

     // Update Contact

     // Filter Contacts

     // Clear Filter


     return (
         <ContactContext.Provider value={{
             contacts: state.contacts
         }}> 
             { props.children }
         </ContactContext.Provider>
     )
 }

 export default ContactState;