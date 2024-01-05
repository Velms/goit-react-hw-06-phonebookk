import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';


export const Filter = () => {
  const filter = useSelector(state => state.filter.value);
}
const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label className={s.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={s.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
