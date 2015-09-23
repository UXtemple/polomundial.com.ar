export default {
  background: {
    image: '/background-blurred.jpg',
    size: 'cover'
  },
  props: {
    'tournamentId': ':tournamentId'
  },
  title(getState, props) {
    const club = getState().tournaments.clubsById[props.tournamentId];

    return `Final ${club.name}`;
  },
  type: 'Final'
};
