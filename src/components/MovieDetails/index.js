import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Chip,
} from '@material-ui/core/';
import { blueGrey } from '@material-ui/core/colors/';

import styles from './styles';

const MovieDetails = ({ movieDetails, movieDetailsLoading, classes }) => {
  const formatRuntime = runtime => {
    const minutes = runtime % 60;
    const hours = Math.floor(runtime / 60);
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} minutes`;
  };

  return !(!movieDetailsLoading && movieDetails !== null) ? (
    <CircularProgress style={{ color: blueGrey[500] }} thickness={4} />
  ) : (
    <div
      className={classes.container}
      style={{
        background:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, ' +
          'rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), ' +
          `url("https://image.tmdb.org/t/p/w1280/${
            movieDetails.backdrop_path
          }")` +
          'no-repeat center center fixed',
        backgroundSize: 'cover',
      }}
    >
      <Card className={classes.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          className={classes.cover}
          alt=""
        />
        <CardContent className={classes.content}>
          <div className={classes.titleContainer}>
            <Typography variant="headline" className={classes.title}>
              {movieDetails.original_title}
            </Typography>
            <Typography
              variant="subheading"
              style={{ color: '#fff', padding: '5px', fontSize: '22px' }}
            >
              ({movieDetails.release_date.substr(0, 4)})
            </Typography>
          </div>
          <div style={{padding: '10px'}}>
            <Chip label={movieDetails.status} className={classes.status}/>
          </div>
          <div className={classes.genres} style={{padding: '10px'}}>
            {movieDetails.genres.map((genre, index) => (
              <Chip
                label={`${genre.name}`}
                className={classes.genre}
                key={index}
              />
            ))}
          </div>
          <div style={{ color: '#fff', padding: '10px' }}>
            {formatRuntime(movieDetails.runtime)}
          </div>
          <div style={{ color: '#117063', fontSize: '24px', padding: '10px' }}>{movieDetails.tagline}</div>
          <div style={{ color: '#fff', padding: '10px' }}>{movieDetails.overview}</div>
          <div className={classes.production_companies} style={{padding: '10px'}}>
            <Typography
              variant="subheading"
              style={{ color: '#117063', fontSize: '28px' }}
            >Production Companies</Typography>
            {movieDetails.production_companies.map((company, index) => (
              company.logo_path ?
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  company.logo_path
                }`}
                key={index}
                alt=""
                style={{
                  height: '48px',
                  background: '#fff',
                  width: '15%',
                  margin: '8px'
                }}
              /> : ''
            ))}
          </div>
          <div style={{padding: '10px'}}>
            <Typography
              variant="subheading"
              style={{ color: '#117063', fontSize: '28px' }}
            >Countries</Typography>
            {movieDetails.production_countries.map((country, index) => (
                <span style={{color: '#fff', padding: '5px'}} key={index}>{country.name}</span>
            ))}
          </div>
          <div style={{padding: '10px'}}>
            <Typography
              variant="subheading"
              style={{ color: '#117063', fontSize: '28px' }}
            >Rating</Typography>
            <span style={{ color: '#fff' }}>{movieDetails.vote_average}/10</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(MovieDetails);
