import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import s from './App.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notification from './Notification';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
          <ContactForm />

          <h2 className={s.titleContacts}>Contacts</h2>
          <div className={s.allContacts}>
            All contacts: {store.getState().contacts.contacts.length}
          </div>

          {store.getState().contacts.contacts.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Notification message="Contact list is empty" />
          )}
        </div>
      </PersistGate>
    </Provider>
  );
}
