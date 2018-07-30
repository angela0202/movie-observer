import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
} from '@material-ui/core/';
import green from '@material-ui/core/colors/green';

import styles from './styles';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} placeholder={label} {...input} {...custom} />;

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const LoginForm = ({
  handleSubmit,
  onSubmit,
  classes,
  isLoginRequesting,
  loginError,
}) => {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <div className={classes.cardMedia}>
          <span className={classes.cardMediaText}>SIGN IN</span>
          <CardMedia className={classes.media} image="/images/login.jpeg.jpg" />
        </div>
        <CardContent>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="username"
              component={renderTextField}
              label="Username"
              type="text"
              margin="normal"
              autoComplete="false"
            />
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
              margin="normal"
            />
            <MuiThemeProvider theme={theme}>
              <Button
                type="submit"
                variant="extendedFab"
                size="small"
                color="primary"
                style={{
                  width: '120px',
                  textTransform: 'none',
                  color: '#fff',
                  marginTop: '15px',
                }}
              >
                Login
              </Button>
            </MuiThemeProvider>
            <div className="message">
              {isLoginRequesting && <div>Please wait...</div>}
              {loginError && <div>{loginError.message}</div>}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoginRequesting: PropTypes.bool.isRequired,
  loginError: PropTypes.bool
};

export default withStyles(styles)(LoginForm);
