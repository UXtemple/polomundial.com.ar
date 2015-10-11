const FIXED = {
  byTournamentId: {
    'tortugas': {
      heading: 'Sábado 17/10 - Copa Emiliano de Anchorena - 15:30',
      team1: {
        id: 'la-dolfina',
        score: 0
      },
      team2: {
        id: 'ellerstina',
        score: 0
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
