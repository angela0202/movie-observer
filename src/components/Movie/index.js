import React from 'react';
import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  List,
  Chip
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import styles from './styles';

const Movie = ({movie, genres, classes}) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={`https://image.tmdb.org/t/p/w200/${
          movie.poster_path
          }`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline" className={classes.title}>
            <Link
              to={`movie?/id=${movie.id}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {movie.title} ({movie.release_date.slice(0, 4)})
            </Link>
          </Typography>
          <List className={classes.list}>
            {movie.genre_ids.map(id => (
              <Chip label={genres[id]} key={id} className={classes.genre}/>
            ))}
          </List>

          <Typography component="p" className={classes.description}>
            {movie.overview.substr(0, 120)}...
          </Typography>
        </CardContent>
        <div className={classes.controls} />
      </div>
    </Card>
  );

};

export default withStyles(styles)(Movie);