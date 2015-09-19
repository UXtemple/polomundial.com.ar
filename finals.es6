const FIXED = {
  byTournamentId: {
    'tortugas': {
      heading: 'Sábado 17/10 - Copa Emiliano de Anchorena - 15:30',
      team1: {
        id: 'alegria',
        score: 6
      },
      team2: {
        id: 'chapaleufu',
        score: 4
      },
      chukkers: {
        1: {
          score: {
            team1: 3,
            team2: 1
          },
          goals: [{
            teamId: 'alegria',
            playerId: 'd-stirling'
          }, {
            teamId: 'alegria',
            playerId: 'd-stirling'
          }]
        }
      }
    }
  }
};

export function reducer(state=FIXED, action) {
  return state;
}
