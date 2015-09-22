export default {
  background(state, props) {
    return {
      image: '/background-blurred.jpg',
      size: 'cover'
    };
  },
  props: {
    'tournamentId': ':tournamentId'
  },
  title(state, props) {
    return state.tournaments.byId[props.tournamentId].name;
  },
  type: 'Tournament'
};
