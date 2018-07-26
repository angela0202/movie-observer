import React, { Fragment } from 'react';
import {
  CardMedia,
  Paper,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  Typography,
  List,
  Button,
  Chip
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

import styles from './styles';

const Main = ({ popularMovies, genres, classes, moviesLoading }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <CardMedia
          image="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          style={{ height: '330px' }}
        />
      </header>
      <Paper className={classes.optionsContainer}>
        <TextField
          id="input-with-icon-textfield"
          className={classes.search}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'fff' }} />
              </InputAdornment>
            ),
          }}
        />
        {moviesLoading && (
          <div style={{ fontSize: '40px', color: 'white' }}>Please wait...</div>
        )}
      </Paper>
      <div className={classes.moviesContainer}>
        {!moviesLoading &&
          popularMovies.results && (
            <div className={classes.movies}>
              {popularMovies.results.map((movie, index) => (
                <Card className={classes.card} key={index}>
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

                      <Typography component="p" className={classes.discription}>
                        {movie.overview.substr(0, 120)}...
                      </Typography>
                    </CardContent>
                    <div className={classes.controls} />
                  </div>
                </Card>
              ))}
            </div>
          )}
        <div className={classes.buttonsContainer}>
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Main);
