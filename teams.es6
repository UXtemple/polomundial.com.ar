const FIXED = {
  playersById: {
    'alegria-cristian-laprida': {
      name: 'Cristian Laprida (h)',
      number: 1,
      photo: '/teams/alegria/cristian-laprida.png',
      handicap: 8,
      titlesByTournamentId: {
        'tortugas': 0,
        'hurlingham': 0,
        'palermo': 0
      },
      tripleCrownTitles: 0
    },
    'alegria-hilario-ulloa': {
      name: 'Hilario Ulloa',
      number: 2,
      photo: '/teams/alegria/hilario-ulloa.png',
      handicap: 9,
      titlesByTournamentId: {
        'tortugas': 0,
        'hurlingham': 0,
        'palermo': 0
      },
      tripleCrownTitles: 0
    },
    'alegria-lucas-monteverde': {
      name: 'Lucas Monteverde (h)',
      number: 3,
      photo: '/teams/alegria/lucas-monteverde.png',
      handicap: 9,
      titlesByTournamentId: {
        'tortugas': 0,
        'hurlingham': 0,
        'palermo': 0
      },
      tripleCrownTitles: 5
    },
    'alegria-frederick-mannix': {
      name: 'Frederick Mannix (h)',
      number: 4,
      photo: '/teams/alegria/frederick-mannix.png',
      handicap: 9,
      titlesByTournamentId: {
        'tortugas': 0,
        'hurlingham': 0,
        'palermo': 0
      },
      tripleCrownTitles: 0
    }
  },
  byId: {
    'alegria': {
      colour: 'PURPLE',
      id: 'alegria',
      images: {
        card: '/teams/alegria/card.jpg',
        logo: '/teams/alegria/logo.jpg'
      },
      name: 'Alegría',
      players: [
        'alegria-cristian-laprida',
        'alegria-hilario-ulloa',
        'alegria-lucas-monteverde',
        'alegria-frederick-mannix'
      ],
      handicap: 40,
      titlesByTournamentId: {
        'tortugas': 2,
        'hurlingham': 2,
        'palermo': 2
      },
      tripleCrownTitles: 18
    },
    'la-dolfina': {
      id: 'la-dolfina',
      images: {
        card: '/teams/la-dolfina/card.jpg'
      },
      name: 'La Dolfina',
      handicap: 35,
      titlesByTournamentId: {
        'tortugas': 0,
        'hurlingham': 0,
        'palermo': 0
      },
      tripleCrownTitles: 0
    },
    'chapaleufu': {
      id: 'chapaleufu',
      images: {
        card: '/teams/chapaleufu/card.jpg'
      },
      name: 'Chapaleufu',
      handicap: 34,
      titlesByTournamentId: {
        'tortugas': 8,
        'hurlingham': 8,
        'palermo': 8
      },
      tripleCrownTitles: 24
    }
  }
};

export function reducer(state=FIXED, action) {
  return state;
}
