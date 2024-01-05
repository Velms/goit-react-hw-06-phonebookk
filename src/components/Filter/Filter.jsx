import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../contactsSlice';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label className={s.labelFilter}>
        Filter
        <input
          type="name"
          value={filter}
          onChange={handleChange}
          className={s.filterInput}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;