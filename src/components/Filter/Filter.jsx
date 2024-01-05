import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Filter contacts:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;