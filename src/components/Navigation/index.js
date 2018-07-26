import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar
} from '@material-ui/core/';

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
            Movie Observer
          </Typography>
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
