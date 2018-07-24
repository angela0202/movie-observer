import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { reduxForm } from 'redux-form';

class LoginFormContainer extends Component {
  submitForm = formValues =>
    this.props.login(formValues.username, formValues.password);

  render() {
    const { handleSubmit } = this.props;

    return <LoginForm onSubmit={this.submitForm} handleSubmit={handleSubmit} />;
  }
}

const formConfiguration = {
  form: 'LoginForm',
};

const Login = reduxForm(formConfiguration)(LoginFormContainer);

export default connect(null)(Login);
