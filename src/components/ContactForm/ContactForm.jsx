import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to add a contact
    dispatch(addContact({ name, number }));
    // Clear the form
    setName('');
    setNumber('');
  };

  // rest of the component...
};

export default ContactForm;