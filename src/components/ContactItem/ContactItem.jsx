import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}............
        {number}
      </p>
      <button className={s.btn} type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;