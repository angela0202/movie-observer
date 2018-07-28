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

const Favorites = () => {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="title">Avatar with text and icon</Typography>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
        </List>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Favorites);
