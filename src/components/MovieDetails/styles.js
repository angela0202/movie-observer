export default {
  container: {
    height: '100%',
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
    background: 'rgba(0, 0, 0, .65)',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '25px'
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
