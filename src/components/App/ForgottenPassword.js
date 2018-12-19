import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

const ForgottenPassword = ({ onChangeView, onChangeInput, email, data, onHandlePassword }) => (
  <div id="login">
    <a
      className="app-link app-link--back"
      onClick={onChangeView}
    >
      {data.link}
    </a>
    <h1 className="app-title">{data.title}</h1>
    <div className="app-desc">
      {data.description}
    </div>
    <form
      className="form"
      onSubmit={onHandlePassword}
    >
      <Field
        placeholder={data.placeholder1}
        handleChange={onChangeInput}
        name="email"
        value={email}
      />
      <button
        className="form-submit"
        type="submit"
      >
        {data.button}
      </button>
    </form>

  </div>
);

ForgottenPassword.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

ForgottenPassword.defaultProps = {
  email: '',
};

export default ForgottenPassword;
