import { Action, Panel } from 'panels-ui';
import { BLACK_TRANSPARENT, BLUE, FONT, WHITE } from '../style';
import { connect } from 'react-redux';
import getGroupId from './get-group-id';
import React from 'react';
import TournamentHeader from '../tournament/header';

export const TeamCard = props => {
  let actionStyle = {
    ...style.action.base
  };

  actionStyle.backgroundImage = `url(${props.team.images.card})`;
  actionStyle.marginTop = props.i === 0 ? 75 : 10;

  return (
    <Action href={`${props.team.id}/`} style={actionStyle} activeStyle={style.action.active}>
      {props.team.name}
    </Action>
  );
};

export const Group = props => {
  const contactStyle = {
    ...style.action.base,
    marginTop: 50
  };

  return (
    <Panel width={props.width} style={style.panel}>
      <TournamentHeader club={props.club} sponsor={props.sponsor} />

      {props.group.teams.map((team, i) => <TeamCard team={props.teamsById[team]} i={i} key={i} />)}
    </Panel>
  );
};

const style = {
  action: {
    active: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: BLUE
    },
    base: {
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundSize: 'cover',
      borderRadius: 5,
      color: BLUE,
      fontSize: 30,
      height: 150,
      marginLeft: 35,
      marginRight: 35,
      paddingLeft: 15,
      paddingTop: 15,
      paddingBottom: 15,
      textShadow: `0 0 10px ${WHITE}`,
      textTransform: 'uppercase'
    }
  },
  panel: {
    alignItems: 'center',
    backgroundColor: WHITE,
    color: BLUE,
    fontFamily: FONT
  }
};

function mapStateToProps(state, props) {
  const group = state.tournaments.groupsById[getGroupId(props.tournamentId, props.groupRef)];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    group,
    sponsor: state.tournaments.sponsorsById[group.sponsorId],
    teamsById: state.teams.byId
  };
}

export default connect(mapStateToProps)(Group);
