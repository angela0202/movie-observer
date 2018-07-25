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
};
