const FIXED = {
  byId: {
    'tortugas-alegria-chapaleufu': {
      heading: 'Martes 29/09 - Fecha 1 - Zona A - 16:00',
      team1: {
        id: 'alegria',
        score: 0
      },
      team2: {
        id: 'chapaleufu',
        score: 0
      }
    }
  },
  byTournamentId: {
    'tortugas': [
      'tortugas-alegria-chapaleufu',
      'tortugas-las-monjitas-la-aguada'
    ],
  }
};

export function reducer(state=FIXED, action) {
  return state;
}
