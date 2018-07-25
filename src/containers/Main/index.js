import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../../components/Main';
import { fetchPopularMovies } from '../../actions/movieActions';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  render() {
    return <Main popularMovies={this.props.popularMovies}/>
  }
}

const mapStateToProps = (state) => ({
  popularMovies: state.movieReducer.popularMovies
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
