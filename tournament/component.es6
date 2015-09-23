import { Panel } from 'panels-ui';
import { BLACK_TRANSPARENT, BLUE, BLUE_TRANSPARENT, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT_65 } from '../style';
import { connect } from 'react-redux';
import Action from '../widgets/action';
import Info from '../widgets/info';
import React from 'react';
import Sponsor from '../widgets/sponsor';

export const TournamentCard = props => {
  let actionStyle = {
    ...style.action
  };

  if (props.i === 0) {
    actionStyle.marginTop = 75;
  }

  return (
    <Action href={`${props.group.ref}/`} style={actionStyle}>
      {props.group.name}
    </Action>
  );
};

export const tournament = props => {
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

      {props.tournament.groups.map((group, i) => <TournamentCard tournamentId={props.tournament.id} group={props.groupsById[group]} i={i} key={i} />)}
      <Action href='fixture/' style={style.action}>Fixture</Action>
      <Action href='la-final/' style={style.action}>La final</Action>

      <div style={style.info}>
        <Info type='address' text={props.club.address} />
        <Info type='email' text={props.club.email} />
        <Info type='phone' text={props.club.phone} />
      </div>
    </Panel>
  );
};

const style = {
  action: {
    borderColor: BLUE_TRANSPARENT,
    color: BLUE
  },
  info: {
    marginTop: 75
  },
  panel: {
    backgroundColor: WHITE_TRANSPARENT_65,
    color: BLUE,
    fontFamily: FONT,
    fontWeight: FONT_LIGHT,
    paddingLeft: 35,
    paddingRight: 35
  },
  title: {
    fontSize: 20,
    fontWeight: FONT_LIGHT,
    marginTop: 85,
    textTransform: 'uppercase'
  },
  sponsor: {
    marginTop: 25
  }
};

function mapStateToProps(state, props) {
  const tournament = state.tournaments.byId[props.tournamentId];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    groupsById: state.tournaments.groupsById,
    sponsor: state.tournaments.sponsorsById[tournament.sponsorId],
    tournament
  };
}

export default connect(mapStateToProps)(tournament);
