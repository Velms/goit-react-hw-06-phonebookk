import React from 'react';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
};

export default ContactsList;