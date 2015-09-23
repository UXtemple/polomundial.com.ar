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
    const club = state.tournaments.clubsById[props.tournamentId];

    return `${club.name} fixture`;
  },
  type: 'Fixture'
};
