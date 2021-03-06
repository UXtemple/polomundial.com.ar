// import getGroupId from './get-group-id';

export default {
  background: {
    image: '/background-blurred.jpg',
    size: 'cover'
  },
  props: {
    'tournamentId': ':tournamentId',
    'groupRef': ':groupRef',
    'teamId': ':teamId'
  },
  title(getState, props) {
    const { tournaments, teams } = getState();

    const club = tournaments.clubsById[props.tournamentId];
    // TODO re-enable when we fix the title and background being compiled when injected into the
    // panel, otherwise we get a missing ref for getGroupId because this function makes it into our
    // state.
    // const group = state.tournaments.groupsById[getGroupId(props.tournamentId, props.groupRef)];
    const group = tournaments.groupsById[`${props.tournamentId}-${props.groupRef}`];

    const team = teams.byId[props.teamId];

    return `${team.name} | ${club.name} ${group.name}`;
  },
  type: 'Team'
};
