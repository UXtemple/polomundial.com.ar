const FIXED = {
  byId: {
    'tortugas-alegria-chapaleufu': {
      heading: 'Martes 29/09 - Fecha 1 - Zona A - 16:00',
      team1: {
        id: 'alegria',
        score: 15
      },
      team2: {
        id: 'chapaleufu',
        score: 11
      }
    },
    'tortugas-las-monjitas-la-aguada': {
      heading: 'Miércoles 30/09 - Fecha 2 - Zona B - 16:00',
      team1: {
        id: 'las-monjitas',
        score: 10
      },
      team2: {
        id: 'la-aguada',
        score: 11
      }
    },
    'tortugas-la-dolfina-chapaleufu': {
      heading: 'Lunes 05/10 - Fecha 3 - Zona A - 15:30',
      team1: {
        id: 'la-dolfina',
        score: 20
      },
      team2: {
        id: 'chapaleufu',
        score: 6
      }
    },
    'tortugas-ellerstina-las-monjitas': {
      heading: 'Domingo 04/10 - Fecha 4 - Zona B - 15:30',
      team1: {
        id: 'ellerstina',
        score: 20
      },
      team2: {
        id: 'las-monjitas',
        score: 12
      }
    },
    'tortugas-la-dolfina-alegria': {
      heading: 'Sábado 10/10 - Fecha 5 - Zona A - 15:30',
      team1: {
        id: 'la-dolfina',
        score: 18
      },
      team2: {
        id: 'alegria',
        score: 8
      }
    },
    'tortugas-ellerstina-la-aguada': {
      heading: 'Domingo 11/10 - Fecha 6 - Zona B - 14:30',
      team1: {
        id: 'ellerstina',
        score: 17
      },
      team2: {
        id: 'la-aguada',
        score: 10
      }
    },
    'tortugas-la-dolfina-ellerstina': {
      heading: 'Sábado 17/10 - Final - Copa Emilio de Anchorena - 15:30',
      team1: {
        id: 'la-dolfina',
        score: 0
      },
      team2: {
        id: 'ellerstina',
        score: 0
      }
    }
  },
  byTournamentId: {
    'tortugas': [
      'tortugas-alegria-chapaleufu',
      'tortugas-las-monjitas-la-aguada',
      'tortugas-la-dolfina-chapaleufu',
      'tortugas-ellerstina-las-monjitas',
      'tortugas-la-dolfina-alegria',
      'tortugas-ellerstina-la-aguada',
      'tortugas-la-dolfina-ellerstina'
    ]
  }
};

export function reducer(state=FIXED, action) {
  return state;
}
