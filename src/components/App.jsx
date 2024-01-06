import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import s from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notification from './Notification';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className={s.titleContacts}>Contacts</h2>
      <div className={s.allContacts}>All contacts: {contacts.length}</div>

      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
}
