import { Action, Panel } from 'panels-ui';
import { BLACK_TRANSPARENT, BLUE, FONT, WHITE, WHITE_TRANSPARENT_50 } from '../style';
import { connect } from 'react-redux';
import React from 'react';
import TournamentHeader from './header';

export const TournamentCard = props => {
  let actionStyle = {
    ...style.action.base
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
      <TournamentHeader club={props.club} sponsor={props.sponsor} />

      {props.tournament.groups.map((group, i) => <TournamentCard tournamentId={props.tournament.id} group={props.groupsById[group]} i={i} key={i} />)}
      <Action href='fixture/' style={style.action.base}>Fixture</Action>
      <Action href='la-final/' style={style.action.base}>La final</Action>

      <Action href='contacto/' style={contactStyle}>Contacto</Action>
    </Panel>
  );
};

const style = {
  action: {
    base: {
      alignSelf: 'stretch',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: BLUE,
      color: BLUE,
      marginLeft: 35,
      paddingLeft: 15,
      paddingTop: 15,
      paddingBottom: 15,
      textTransform: 'uppercase'
    }
  },
  panel: {
    alignItems: 'center',
    backgroundColor: WHITE_TRANSPARENT_50,
    color: BLUE,
    fontFamily: FONT
  },
  split: {
    backgroundColor: BLACK_TRANSPARENT,
    height: 1,
    marginTop: 5,
    width: 200
  },
  sponsorLogo: {
    marginTop: 5,
    width: '40%'
  },
  sponsoredBy: {
    marginTop: 5
  },
  title: {
    color: BLUE,
    marginTop: 75,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  titleIntro: {
    fontSize: 23,
    fontWeight: 100
  },
  titleName: {
    fontSize: 25,
    fontWeight: 600
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
