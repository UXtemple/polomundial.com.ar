import { Action, Panel } from 'panels-ui';
import { BLUE, BLUE_TRANSPARENT, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT_85 } from '../style';
import { connect } from 'react-redux';
import getGroupId from '../group/get-group-id';
import React from 'react';
import Sponsor from '../widgets/sponsor';

export const Match = props => {
  let wrapperStyle = {
    marginTop: 75
  };
  const team2MatchContent = {
    ...style.matchContent,
    marginLeft: 10
  };

  const team1Name = props.teamsById[props.team1.id] ? props.teamsById[props.team1.id].name : props.team1.id;
  const team2Name = props.teamsById[props.team2.id] ? props.teamsById[props.team2.id].name : props.team2.id;

  return (
    <div style={wrapperStyle}>
      <div style={style.matchHeading}>
        {props.heading}
      </div>
      <div style={style.matchContentWrapper}>
        <div style={style.matchContent}>
          <div style={style.matchTeam}>{team1Name}</div>
          <div style={style.matchScore}>{props.team1.score}</div>
        </div>
        <div style={team2MatchContent}>
          <div style={style.matchScore}>{props.team2.score}</div>
          <div style={style.matchTeam}>{team2Name}</div>
        </div>
      </div>
    </div>
  );
};

export const Final = props => {
  return (
    <Panel width={props.width} style={style.panel}>
      <h1 style={style.title}>
        <span>{props.club.name}</span>
        <span>la final</span>
      </h1>
      <Sponsor {...props.sponsor} colour='BLUE' style={style.sponsor} />

      <Match {...props.match} teamsById={props.teamsById} />

      <h2 style={style.live}>Seguimiento en vivo</h2>
    </Panel>
  );
};

const style = {
  matchHeading: {
    fontSize: 14
  },
  matchContent: {
    alignItems: 'center',
    msFlexAlign: 'center',
    WebkitAlignItems: 'center',
    flex: 1,
    msFlex: 1,
    WebkitFlex: 1,
    flexDirection: 'row',
    msFlexDirection: 'row',
    WebkitFlexDirection: 'row',
    justifyContent: 'space-between',
    msFlexPack: 'justify',
    WebkitJustifyContent: 'space-between'
  },
  matchContentWrapper: {
    flexDirection: 'row',
    msFlexDirection: 'row',
    WebkitFlexDirection: 'row',
    marginTop: 5
  },
  matchTeam: {
    textTransform: 'uppercase'
  },
  matchScore: {
    fontSize: 25
  },
  live: {
    fontSize: 20,
    fontWeight: FONT_LIGHT,
    marginTop: 10
  },
  panel: {
    backgroundColor: WHITE_TRANSPARENT_85,
    color: BLUE,
    fontFamily: FONT,
    fontWeight: FONT_LIGHT,
    paddingBottom: 200,
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
  const matches = state.fixtures.byTournamentId[props.tournamentId];
  const match = state.fixtures.byId[matches[matches.length - 1]];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    match,
    sponsor: state.tournaments.sponsorsById[tournament.sponsorId],
    teamsById: state.teams.byId
  };
}

export default connect(mapStateToProps)(Final);
