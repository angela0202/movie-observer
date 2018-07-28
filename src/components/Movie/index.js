import React from 'react';
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  List,
  Chip,
  Button,
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Favorite } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

import styles from './styles';

const Movie = ({ movie, genres, classes, onAddToFavorites }) => {
  return (
    <Card className={classes.card}>
      <div style={{position: 'relative'}}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}  className={classes.cover} alt="" onClick={() => onAddToFavorites(movie.id)}/>
        <div className={classes.overlay}>
          <Button variant="fab" className={classes.button}>
            <Favorite />
          </Button>
        </div>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline" className={classes.title}>
            <Link
              to={`movie/:${movie.id}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Link>
          </Typography>
          {!genres ? '' : (
            <List className={classes.list}>
              {movie.genre_ids.map(id => (
                <Chip label={genres[id]} key={id} className={classes.genre} />
              ))}
            </List>
          )}

          <Typography component="p" className={classes.description}>
            {movie.overview.substr(0, 120)}...
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default withStyles(styles)(Movie);
