const FIXED = {
  byTournamentId: {
    'tortugas': {
      active: false,
      done: false,
      chukkers: [
        // {
        //   number: 6,
        //   score: {
        //     team1: 0,
        //     team2: 0
        //   },
        //   goals: [
        //   ]
        // },

        // {
        //   number: 5,
        //   score: {
        //     team1: 0,
        //     team2: 0
        //   },
        //   goals: [
        //   ]
        // },

        // {
        //   number: 4,
        //   score: {
        //     team1: 0,
        //     team2: 0
        //   },
        //   goals: [
        //   ]
        // },

        // {
        //   number: 3,
        //   score: {
        //     team1: 0,
        //     team2: 0
        //   },
        //   goals: [
        //   ]
        // },

        // {
        //   number: 2,
        //   score: {
        //     team1: 0,
        //     team2: 0
        //   },
        //   goals: [
        //   ]
        // },

        {
          number: 1,
          score: {
            team1: 0,
            team2: 0
          },
          goals: [
            // {
            //   team: 'team1',
            //   playerId: 'washington-diego-cavanagh'
            // },
            // {
            //   team: 'team2',
            //   playerId: 'magual-francisco-elizalde'
            // }
          ]
        }
      ]
    },
    'hurlingham': {
      active: false
    },
    'palermo': {
      active: false
    }
  }
};

export function reducer(state=FIXED, action) {
  return state;
}
