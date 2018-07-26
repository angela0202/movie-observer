export default {
  header: {
    height: '330px',
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, .35)',
    },
  },

  optionsContainer: {
    height: '90px',
    background: '#030f1a',
    borderRadius: 0,
  },

  search: {
    background: 'rgba(78, 69, 69, .2)',
    color: '#fff',
  },

  moviesContainer: {
    display: 'flex',
    height: 'max-content',
    flexDirection: 'column',
    background: '#e6e6e6'
  },

  movieCard: {
    width: '325px',
    margin: '15px',
  },

  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  genre: {
    fontSize: '16px',
    color: '#9FA7A9',
  },

  card: {
    display: 'flex',
    margin: '32px 62px',
    height: '300px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '300px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 50,
    width: 50,
  },

  title: {
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};
