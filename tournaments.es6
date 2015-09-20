const FIXED = {
  groupsById: {
    'tortugas-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo A',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'alegria',
        'chapaleufu'
      ]
    },
    'tortugas-grupo-b': {
      ref: 'grupo-b',
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
  sponsorsById: {
    'sancor-seguros': {
      image: '/logos/sancor-seguros-colour.png',
      name: 'Sancor Seguros'
    }
  },
  byId: {
    'tortugas': {
      id: 'tortugas',
      image: '/tortugas.jpg',
      name: 'Tortugas',
      clubId: 'tortugas',
      groups: [
        'tortugas-grupo-a',
        'tortugas-grupo-b'
      ],
      sponsorId: 'sancor-seguros'
    },
    'hurlingham': {
      id: 'hurlingham',
      image: '/hurlingham.jpg',
      name: 'Hurlingham',
      groups: [
        'hurlingham-grupo-a',
        'hurlingham-grupo-b'
      ]
    },
    'palermo': {
      id: 'palermo',
      image: '/palermo.jpg',
      name: 'Palermo',
      groups: [
        'palermo-grupo-a',
        'palermo-grupo-b'
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
