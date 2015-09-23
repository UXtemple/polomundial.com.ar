import * as STYLE from '../style';
import { connect } from 'react-redux';
import { Panel } from 'panels-ui';
import getGroupId from '../group/get-group-id';
import React from 'react';
import Sponsor from '../widgets/sponsor';

export const PlayerCard = props => {
  const COLOUR = STYLE[props.colour];

  const playerHeading = {
    ...style.playerHeading,
    borderColor: COLOUR
  };

  return (
    <div style={style.player}>
      <div style={playerHeading}>
        <span style={style.playerNumber}>{props.player.number}</span>
        {props.player.name}
      </div>
      <div style={{flexDirection: 'row'}}>
        <img src={props.player.photo} alt={props.player.name} style={style.playerPhoto} />
        <div>
          {props.player.handicap}
          <span>Handicap</span>
        </div>
      </div>
      <div>
        dots...
      </div>
    </div>
  );
};

export const Team = props => {
  return (
    <Panel width={props.width} style={style.panel}>
      <Sponsor {...props.sponsor} />

      <div style={style.team}>
        <img src={props.team.images.logo} alt={props.team.name} style={style.teamLogo} />
        <span style={style.teamName}>{props.team.name}</span>
      </div>

      <div style={{flexDirection: 'row'}}>
        <div>
          <span>{props.team.handicap}</span>
          <span>Handicap</span>
        </div>
      </div>

      {props.team.players.map((player, i) => <PlayerCard colour={props.team.colour} player={props.playersById[player]} i={i} key={i} />)}
    </Panel>
  );
};

const style = {
  team: {
    flexDirection: 'row',
    fontSize: 30,
    marginTop: 75,
    marginLeft: 50,
    textTransform: 'uppercase'
  },
  teamLogo: {
    height: '1em'
  },
  teamName: {
    marginLeft: 10
  },
  panel: {
    alignItems: 'flex-start',
    backgroundColor: STYLE.WHITE,
    color: STYLE.BLACK,
    fontFamily: STYLE.FONT
  },
  player: {
    marginLeft: 50
  },
  playerHeading: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    textTransform: 'uppercase'
  },
  playerNumber: {
    fontWeight: 600
  },
  playerPhoto: {
    height: 100,
    width: 100
  }
};

function mapStateToProps(state, props) {
  const group = state.tournaments.groupsById[getGroupId(props.tournamentId, props.groupRef)];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    group,
    playersById: state.teams.playersById,
    sponsor: state.tournaments.sponsorsById[group.sponsorId],
    team: state.teams.byId[props.teamId]
  };
}

export default connect(mapStateToProps)(Team);
