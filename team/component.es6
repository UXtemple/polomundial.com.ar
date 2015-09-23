import { BLUE, FONT, FONT_LIGHT, WHITE } from '../style';
import { connect } from 'react-redux';
import { Panel } from 'panels-ui';
import DottedStat from '../widgets/dotted-stat';
import getGroupId from '../group/get-group-id';
import React from 'react';
import Sponsor from '../widgets/sponsor';
import Stat from '../widgets/stat';

export const PlayerCard = props => {
  const titlesText = {
    0: `Ningún título en ${props.tournament.name}`,
    1: `1 título en ${props.tournament.name}`,
    many: `títulos en ${props.tournament.name}`
  };

  const tripleCrownTitlesText = {
    0: `Ningún título de Triple Corona`,
    1: `1 título de Triple Corona`,
    many: `títulos de Triple Corona`
  };

  return (
    <div style={style.player}>
      <div style={style.playerHeading}>
        <span style={style.playerNumber}>{props.player.number}</span>
        <span style={style.playerName}>{props.player.name}</span>
      </div>

      <div style={style.playerContent}>
        <img src={props.player.photo} alt={props.player.name} style={style.playerPhoto} />
        <Stat number={props.player.handicap} text='Handicap' style={style.stat} />
      </div>

      <DottedStat number={props.player.titlesByTournamentId[props.tournament.id]} text={titlesText} />
      <DottedStat number={props.player.tripleCrownTitles} text={tripleCrownTitlesText} />
    </div>
  );
};

export const Team = props => {
  return (
    <Panel width={props.width} style={style.panel}>
      <h1 style={style.title}>
        <span>{`${props.tournament.name} ${props.group.name}`}</span>
        <span>{props.team.name}</span>
      </h1>
      <Sponsor {...props.sponsor} colour='BLUE' style={style.sponsor} />

      <div style={style.stats}>
        <Stat number={props.team.handicap} text='Handicap' style={style.stat} />
        <Stat number={props.team.titlesByTournamentId[props.tournamentId]} text={`Títulos en ${props.tournament.name}`} style={style.stat} />
        <Stat number={props.team.tripleCrownTitles} text='Títulos de Triple Corona' style={style.stat} />
      </div>

      <div style={style.players}>
        {props.team.players.map((player, i) =>
          <PlayerCard colour={props.team.colour} player={props.playersById[player]} key={i}
            i={i} tournament={props.tournament} />)}
      </div>
    </Panel>
  );
};

const style = {
  team: {
    flexDirection: 'row',
    fontSize: 30,
    marginTop: 75,
    textTransform: 'uppercase'
  },
  panel: {
    backgroundColor: WHITE,
    color: BLUE,
    fontFamily: FONT,
    fontWeight: FONT_LIGHT,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 200
  },
  player: {
    marginTop: 25
  },
  playerContent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  playerHeading: {
    flexDirection: 'row',
    textTransform: 'uppercase'
  },
  playerName: {
    marginLeft: 10
  },
  playerNumber: {
    fontWeight: 600
  },
  playerPhoto: {
    height: 100,
    width: 100
  },
  players: {
    marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: FONT_LIGHT,
    marginTop: 85,
    textTransform: 'uppercase'
  },
  sponsor: {
    marginTop: 25
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50
  },
  stat: {
    width: '30%'
  }
};

function mapStateToProps(state, props) {
  const group = state.tournaments.groupsById[getGroupId(props.tournamentId, props.groupRef)];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    group,
    playersById: state.teams.playersById,
    sponsor: state.tournaments.sponsorsById[group.sponsorId],
    team: state.teams.byId[props.teamId],
    tournament: state.tournaments.byId[props.tournamentId]
  };
}

export default connect(mapStateToProps)(Team);
