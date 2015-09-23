export default {
  background: {
    image: '/background-blurred.jpg',
    size: 'cover'
  },
  props: {
    'tournamentId': ':tournamentId'
  },
  title(getState, props) {
    return getState().tournaments.byId[props.tournamentId].name;
  },
  type: 'Tournament'
};
