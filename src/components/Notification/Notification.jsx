import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../contactsSlice';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.contacts.notification);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(clearNotification());
      }, 3000); // Clear the notification after 3 seconds
    }
  }, [notification, dispatch]);

  return notification ? <p className={s.title}>{notification}</p> : null;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;