import React from 'react';
import { CardMedia, Paper } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Main = ({ popularMovies, classes }) => {
  return (
    <header className={classes.header}>
        <CardMedia
          image="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          style={{ height: '330px' }}
        />
    </header>
  );
};

export default withStyles(styles)(Main);
