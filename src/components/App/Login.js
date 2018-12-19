import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

const Login = ({
  onChangeView, onChangeInput, email, password, data,
}) => (
  <div id="login">
    <h1 className="app-title">{data.title}</h1>
    <div className="app-desc">
      {data.description}
    </div>
    <form className="form">
      <Field
        value={email}
        handleChange={onChangeInput}
        name="email"
        placeholder={data.placeholder1}
      />
      <Field
        value={password}
        handleChange={onChangeInput}
        name="password"
        placeholder={data.placeholder2}
      />
      <button className="form-submit form-submit--login" type="submit">{data.button}</button>
    </form>
    <a
      className="app-link"
      onClick={onChangeView}
    >
      {data.link}
    </a>
  </div>
);

Login.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

Login.defaultProps = {
  email: '',
  password: '',
};

export default Login;
