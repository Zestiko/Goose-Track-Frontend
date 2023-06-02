import React from 'react';
import scss from './Filter.module.scss';
// import PropTypes from 'prop-types';
import { useInput } from 'hooks/useInput';
import { TiDeleteOutline } from 'react-icons/ti';
// const propTypes = {};

// const defaultProps = {};

/**
 *
 */
const Filter = () => {
  const [filterProps, resetFilter] = useInput('');
  return (
    <div className={scss.filterBox}>
      <input
        id="floatingInput"
        className={scss.input}
        placeholder=" "
        {...filterProps}
        type="text"
      />
      <label htmlFor="floatingInput">Search...</label>
      {filterProps.value && (
        <TiDeleteOutline
          size={24}
          onClick={resetFilter}
          className={scss.clearFilterIcon}
        />
      )}
    </div>
  );
};

// Filter.propTypes = propTypes;
// Filter.defaultProps = defaultProps;
// #endregion

export default Filter;
