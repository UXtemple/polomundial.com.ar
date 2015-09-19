const FIXED = {
  groupsById: {
    'tortugas-a': {
      name: 'Grupo A',
      sponsoredBy: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'alegria',
        'chapaleufu'
      ]
    },
    'tortugas-b': {
      name: 'Grupo B',
      sponsoredBy: 'prevencion-salud',
      teams: [
        'ellerstina',
        'las-monjitas',
        'la-aguada'
      ]
    }
  },
  clubsById: {
    'tortugas': {
      address: 'Panamericano Ramal Pilar km 385',
      email: 'administracion@tortugascountryclub.com.ar',
      name: 'Tortugas Country Club',
      phone: '02320 49-1262'
    }
  },
  byId: {
    'tortugas': {
      id: 'tortugas',
      image: '/tortugas.jpg',
      name: 'Tortugas',
      clubId: 'tortugas',
      groups: [
        'tortugas-a',
        'tortugas-b'
      ]
    },
    'hurlingham': {
      id: 'hurlingham',
      image: '/hurlingham.jpg',
      name: 'Hurlingham',
      groups: [
        'hurlingham-a',
        'hurlingham-b'
      ]
    },
    'palermo': {
      id: 'palermo',
      image: '/palermo.jpg',
      name: 'Palermo',
      groups: [
        'palermo-a',
        'palermo-b'
      ]
    }
  },
  list: [
    'tortugas',
    'hurlingham',
    'palermo'
  ]
};

export function reducer(state=FIXED, action) {
  return state;
}
