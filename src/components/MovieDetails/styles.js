export default {
  container: {
    height: '100vh',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  movie: {
    textAlign: 'left',
    marginTop: '1em',
    background: 'rgba(0,0,0,.8)',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cover: {
    paddingRight: '10px',
    maxWidth: '100%',
  },

  title: {
    color: '#fff',
    padding: '5px'
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  genre: {
    margin: '3px',
    background: '#117063',
    color: '#fff'
  },
  status: {
    background: '#117063',
    color: '#fff',
    borderRadius: '6px'
  }
};
