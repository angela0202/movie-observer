export default {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ebeef0'
  },

  card: {
    width: '670px',
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
  },

  media: {
    height: 0,
    paddingTop: '25%', // 16:9
  },

  cardMedia: {
    position: 'relative',

    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      backgroundColor: 'rgba(54, 84, 99, 0.57)',
    },
  },
  cardMediaText: {
    position: 'absolute',
    top: '40%',
    transform: 'translate(-50%)',
    left: '50%',
    color: '#fff',
    fontWeight: 'bolder',
    fontSize: '30px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
};
