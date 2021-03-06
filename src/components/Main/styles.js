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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  moviesContainer: {
    display: 'flex',
    height: 'max-content',
    flexDirection: 'column',
    background: '#e6e6e6',
    padding: '20px 0',
  },

  movieCard: {
    width: '325px',
    margin: '15px',
  },

  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  genre: {
    fontSize: '16px',
    margin: '3px'
  },

  card: {
    display: 'flex',
    margin: '20px',
    height: '300px',
    width: '500px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  cover: {
    width: '611px',
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
    fontSize: '25px',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  buttonsContainer: {
    display: 'flex',
    alignSelf: 'center',
    padding: '10px',
  },

  movies: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  discription: {
    fontSize: '15px',
    marginTop: 'auto',
  },
};
