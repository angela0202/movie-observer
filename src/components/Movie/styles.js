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
    width: '611px',
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
}