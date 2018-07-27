export default {
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
    width: '100%',
    maxWidth: '300px',
    height: 'auto'
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
    zIndex: 5
  },
  description: {
    fontSize: '15px',
    marginTop: 'auto',
  },

  button: {

  },

  overlay: {
    width: '100%',
    height: '100%',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }
}