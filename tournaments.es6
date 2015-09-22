const FIXED = {
  groupsById: {
    'palermo-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo A',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'alegria',
        'la-aguada',
        'equipo-xxx'
      ]
    },
    'palermo-grupo-b': {
      ref: 'grupo-b',
      name: 'Grupo B',
      sponsorId: 'prevencion-salud',
      teams: [
        'ellerstina',
        'las-monjitas',
        'chapaleufu',
        'equipo-xxxx'
      ]
    },
    'hurlingham-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo A',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'las-monjitas',
        'la-aguada',
        'equipo-xxx'
      ]
    },
    'hurlingham-grupo-b': {
      ref: 'grupo-b',
      name: 'Grupo B',
      sponsorId: 'prevencion-salud',
      teams: [
        'ellerstina',
        'alegria',
        'chapaleufu',
        'equipo-xxxx'
      ]
    },
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
      sponsorId: 'prevencion-salud',
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
    'prevencion-salud': {
      image: '/logos/prevencion-salud-colour.png',
      name: 'Prevención Salud'
    },
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
      ],
      sponsorId: 'sancor-seguros'
    },
    'palermo': {
      id: 'palermo',
      image: '/palermo.jpg',
      name: 'Palermo',
      groups: [
        'palermo-grupo-a',
        'palermo-grupo-b'
      ],
      sponsorId: 'sancor-seguros'
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
