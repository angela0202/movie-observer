import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    position: 'absolute'
  }
};

const Navigation = ({ classes, logout, currentUser }) => {

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Movie Observer</Link>
          </Typography>
          <Link to="/favorites">
            <Button color="inherit"><span style={{textDecoration: 'none', color: '#fff'}}>Favorites</span></Button>
          </Link>
          <Avatar>
            {currentUser.username[0]}
          </Avatar>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navigation);
