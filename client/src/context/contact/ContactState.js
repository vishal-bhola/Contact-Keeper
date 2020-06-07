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
         contact: [
            {
                "type": "personal",
                "_id": "5edbb3299036e13f30d4572f",
                "name": "khushboo",
                "email": "khushboo@gmail.com",
                "phone": "111-222-333",
                "user": "5eda372ad5f38a45f86b370d",
                "date": "2020-06-06T15:15:53.587Z",
                "__v": 0
            },
            {
                "type": "personal",
                "_id": "5edbb30e9036e13f30d4572e",
                "name": "reshabh",
                "email": "reshabh@gmail.com",
                "phone": "1234566890",
                "user": "5eda372ad5f38a45f86b370d",
                "date": "2020-06-06T15:15:26.402Z",
                "__v": 0
            },
            {
                "type": "professional",
                "_id": "5edbb2ef9036e13f30d4572d",
                "name": "paras",
                "email": "paras@gmail.com",
                "phone": "8683045623",
                "user": "5eda372ad5f38a45f86b370d",
                "date": "2020-06-06T15:14:55.851Z",
                "__v": 0
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

 export default ContactState