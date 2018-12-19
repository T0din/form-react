/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Field.scss';

const Field = ({
  name, type, placeholder, value, handleChange,
}) => (
  <div className="field">
    <input
      id={name}
      name={name}
      type={type}
      className={classnames({
        'field-input': true,
        'field-input--has-content': value, // value <===> value !== ''
      })}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
    <label
      className="field-label"
      htmlFor={name}
    >
      {placeholder}
    </label>
  </div>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number']),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

/**
 * Export
 */
export default Field;
