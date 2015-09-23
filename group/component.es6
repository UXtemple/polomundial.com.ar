import { Action, Panel } from 'panels-ui';
import { BLUE, BLUE_TRANSPARENT, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT_85 } from '../style';
import { connect } from 'react-redux';
import getGroupId from './get-group-id';
import React from 'react';
import Sponsor from '../widgets/sponsor';

export const TeamCard = props => {
  let actionStyle = {
    ...style.action.base
  };

  actionStyle.backgroundImage = `url(${props.team.images.card})`;
  actionStyle.marginTop = props.i === 0 ? 75 : 3;

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
      <h1 style={style.title}>
        <span>Campeonato abierto del</span>
        <span>{props.club.name}</span>
      </h1>
      <Sponsor {...props.sponsor} colour='BLUE' style={style.sponsor} />

      {props.group.teams.map((team, i) => <TeamCard team={props.teamsById[team]} i={i} key={i} />)}
    </Panel>
  );
};

const style = {
  action: {
    active: {
      paddingLeft: 55
    },
    base: {
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundSize: 'cover',
      color: BLUE,
      fontSize: 30,
      height: 150,
      paddingLeft: 35,
      paddingTop: 15,
      paddingBottom: 15,
      textShadow: `0 0 10px ${WHITE}`,
      textTransform: 'uppercase',
      transition: 'padding-left 0.25s linear'
    }
  },
  panel: {
    backgroundColor: WHITE_TRANSPARENT_85,
    color: BLUE,
    fontFamily: FONT,
    fontWeight: FONT_LIGHT,
    paddingBottom: 200
  },
  title: {
    fontSize: 20,
    fontWeight: FONT_LIGHT,
    marginTop: 85,
    paddingLeft: 35,
    paddingRight: 35,
    textTransform: 'uppercase'
  },
  sponsor: {
    marginTop: 25,
    paddingLeft: 35,
    paddingRight: 35
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
