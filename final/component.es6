import { Action, Panel } from 'panels-ui';
import { alignItemsCenter, alignSelfFlexStart, flex1, flexDirectionRow, justifyContentSpaceBetween } from 'browser-vendor-prefix';
import { BLUE, BLUE_TRANSPARENT, DARK_GREY, FONT, FONT_LIGHT, WHITE, WHITE_TRANSPARENT_85 } from '../style';
import { connect } from 'react-redux';
import { getFinal } from '../finals/actions';
import getGroupId from '../group/get-group-id';
import React, { Component } from 'react';
import Sponsor from '../widgets/sponsor';

const Dot = props => <div style={{...props.style, ...style.dot}} />;

const GoalTeam1 = props => (
  <div style={style.goalTeam1}>
    <div style={style.goalPlayerTeam1}>{props.playersById[props.playerId].name}</div>
    <Dot style={{marginLeft: 10}} />
  </div>
);

const GoalTeam2 = props => (
  <div style={style.goalTeam2}>
    <Dot style={{marginRight: 10}} />
    <div style={style.goalPlayerTeam2}>{props.playersById[props.playerId].name}</div>
  </div>
);

const Chukker = props => (
  <div style={style.chukker}>
    <div style={style.chukkerHeading}>
      {`${props.number}º Chukker (${props.score.team1} - ${props.score.team2})`}
    </div>
    {props.goals.map((goal, i) => goal.team === 'team1' ?
                      <GoalTeam1 {...goal} playersById={props.playersById} key={i} /> :
                      <GoalTeam2 {...goal} playersById={props.playersById} key={i} />)}
  </div>
);

export const Match = props => {
  let wrapperStyle = {
    marginTop: 25
  };
  const team2MatchContent = {
    ...style.matchContent,
    marginLeft: 10
  };

  const team1Name = props.teamsById[props.team1.id] ? props.teamsById[props.team1.id].name : props.team1.id;
  const team2Name = props.teamsById[props.team2.id] ? props.teamsById[props.team2.id].name : props.team2.id;

  let chukkers;

  if (props.final.active) {
    chukkers = props.final.chukkers.map((chukker, i) => chukker.active && <Chukker key={i} {...chukker} playersById={props.playersById} />);
  }

  return (
    <div style={wrapperStyle}>
      <div style={style.matchHeading}>
        {props.heading}
      </div>
        {
          props.final.active && (
            <div style={style.matchContentWrapper}>
              <div style={style.matchContent}>
                <div style={style.matchTeam}>
                  <img src={`/teams/${props.team1.id}/logo.svg`} alt={props.team1.id} style={style.teamLogo} />
                </div>
                <div style={style.matchScore}></div>
              </div>
              <div style={team2MatchContent}>
                <div style={style.matchScore}></div>
                <div style={style.matchTeam}>
                  <img src={`/teams/${props.team2.id}/logo.svg`} alt={props.team2.id} style={style.teamLogo} />
                </div>
              </div>
            </div>
          )
        }
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
      {chukkers}
    </div>
  );
};

export class Final extends Component {
  componentDidMount() {
    this.props.dispatch(getFinal());

    this.interval = setInterval(() => this.props.dispatch(getFinal()), 60*1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Panel width={this.props.width} style={style.panel}>
        <h1 style={style.title}>
          <span>{this.props.club.name}</span>
          <span>la final</span>
        </h1>
        <Sponsor {...this.props.sponsor} colour='BLUE' style={style.sponsor} />

        <h2 style={style.live}>{!this.props.final.done && 'Seguimiento en vivo'}</h2>

        <Match {...this.props.match} teamsById={this.props.teamsById} final={this.props.final} playersById={this.props.playersById} />
      </Panel>
    );
  }
}

const style = {
  chukker: {
    ...alignItemsCenter,
    marginTop: 25
  },
  chukkerHeading: {
    textTransform: 'uppercase'
  },
  dot: {
    backgroundColor: DARK_GREY,
    borderRadius: 20,
    height: 20,
    width: 20
  },
  goalTeam1: {
    ...alignItemsCenter,
    ...flexDirectionRow,
    ...alignSelfFlexStart,
    marginTop: 10,
    width: 'calc(50% + 10px)'
  },
  goalTeam2: {
    ...alignItemsCenter,
    ...flexDirectionRow,
    alignSelf: 'flex-end',
    marginTop: 10,
    width: 'calc(50% + 10px)'
  },
  goalPlayerTeam1: {
    ...flex1,
    textAlign: 'right'
  },
  goalPlayerTeam2: {
    ...flex1
  },
  matchHeading: {
    fontSize: 14
  },
  matchContent: {
    ...alignItemsCenter,
    ...flex1,
    ...flexDirectionRow,
    ...justifyContentSpaceBetween,
  },
  matchContentWrapper: {
    ...flexDirectionRow,
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
    marginTop: 85
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
  teamLogo: {
    height: 75
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
  const final = state.finals.byTournamentId[props.tournamentId];

  return {
    club: state.tournaments.clubsById[props.tournamentId],
    final,
    match,
    sponsor: state.tournaments.sponsorsById[tournament.sponsorId],
    playersById: state.teams.playersById,
    teamsById: state.teams.byId
  };
}

export default connect(mapStateToProps)(Final);
