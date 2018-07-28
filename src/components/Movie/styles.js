export default {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  genre: {
    fontSize: '16px',
    margin: '3px',
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
    position: 'relative'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    maxWidth: '500px',
    height: '300px',
    opacity: 1,
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
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
  description: {
    fontSize: '15px',
    marginTop: 'auto',
  },

  button: {},

  overlay: {
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },


};
