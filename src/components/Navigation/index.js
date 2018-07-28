import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { Paper, TextField } from '@material-ui/core/';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} placeholder={label} {...input} {...custom} />;

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  bootstrapRoot: {
    margin: '10px',
    padding: 0,
    background: '#fff',
    'label + &': {
    },
  },

  bootstrapInput: {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontStyle: 'italic',
    fontSize: 16,
    padding: '10px 12px',
    width: '526px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      background: '#fff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  search: {
    position: 'absolute',
    margin: '0 auto'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  }
};

const Navigation = ({ classes, logout, currentUser, handleSearch }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              Movie Observer
            </Link>
          </Typography>
            <Field
              name="search"
              component={renderTextField}
              className={classes.search}
              placeholder="Search movies..."
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                },
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.bootstrapFormLabel,
              }}
              onChange={e => handleSearch(e.target.value)}
            />
          <Link to="/favorites">
            <Button color="inherit">
              <span style={{ textDecoration: 'none', color: '#fff' }}>
                Favorites
              </span>
            </Button>
          </Link>
          <Avatar>{currentUser.username[0]}</Avatar>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navigation);
