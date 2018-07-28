import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHead,
  Paper,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

import styles from './styles';

const Favorites = ({ favorites, favoritesLoading, classes }) => {
  return favorites !== null && !favoritesLoading ? (
    <div
      style={{
        background:
          'linear-gradient(to bottom, rgba(0, 0, 0, .5) 0%, ' +
          'rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), ' +
          `url("http://thewaycom.com.br/novosite/wp-content/uploads/2016/12/audiovisual.jpg")` +
          'no-repeat center center fixed',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        paddingTop: '100px',
      }}
    >
      <Paper style={{
        margin: '0 80px',
        minWidth: '445px'
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Average Vote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.map((movie, index) => (
              <TableRow movie={movie} key={index}>
                <TableCell>
                  <Link
                    to={`movie/:${movie.id}`}
                    style={{ textDecoration: 'underline', color: '#000' }}
                  >
                    {movie.original_title}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`movie/:${movie.id}`}
                    style={{ textDecoration: 'underline', color: '#000' }}
                  >
                    {movie.release_date}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`movie/:${movie.id}`}
                    style={{ textDecoration: 'underline', color: '#000' }}
                  >
                    {movie.vote_average}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  ) : (
    <div style={{ fontSize: '40px', color: '#000' }}>Please wait...</div>
  );
};

export default withStyles(styles)(Favorites);
