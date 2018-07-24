import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import LoginForm from '../../components/LoginForm';
import { login } from '../../actions/loginAction';

class LoginFormContainer extends Component {
  submitForm = formValues =>
    this.props.login(formValues.username, formValues.password);

  render() {
    const { handleSubmit } = this.props;

    return <LoginForm
      onSubmit={this.submitForm}
      handleSubmit={handleSubmit}
      isLoginRequesting={this.props.isLoginRequesting}
      loginError={this.props.loginError}
    />;
  }
}

const formConfiguration = {
  form: 'LoginForm',
};

const mapStateToProps = (state) => ({
  isLoginRequesting: state.loginReducer.isLoginRequesting,
  loginError: state.loginReducer.loginError,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

const Login = reduxForm(formConfiguration)(LoginFormContainer);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
