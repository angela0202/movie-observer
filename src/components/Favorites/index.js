import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core/';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './styles';
import Movie from '../Movie';

const Favorites = ({ favorites, favoritesLoading, classes }) => {
  return (
    (favorites !== null && !favoritesLoading) ? (

      <div className={classes.container}>
        <div className={classes.movies}>
            {
              favorites.map((movie, index) => (
                <Movie movie={movie} key={index} />
              ))
            }
        </div>
      </div>

    ) : (
      <div style={{ fontSize: '40px', color: '#000' }}>Please wait...</div>
    )
  )

};

export default withStyles(styles)(Favorites);
