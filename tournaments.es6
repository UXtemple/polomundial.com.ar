const FIXED = {
  groupsById: {
    'palermo-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo "A"',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'alegria',
        'la-aguada',
        'magual'
      ]
    },
    'palermo-grupo-b': {
      ref: 'grupo-b',
      name: 'Grupo "B"',
      sponsorId: 'prevencion-salud',
      teams: [
        'ellerstina',
        'las-monjitas',
        'chapaleufu',
        'washington'
      ]
    },
    'hurlingham-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo "A"',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'las-monjitas',
        'la-aguada',
        'washington'
      ]
    },
    'hurlingham-grupo-b': {
      ref: 'grupo-b',
      name: 'Grupo "B"',
      sponsorId: 'prevencion-salud',
      teams: [
        'ellerstina',
        'alegria',
        'chapaleufu',
        'magual'
      ]
    },
    'tortugas-grupo-a': {
      ref: 'grupo-a',
      name: 'Grupo "A"',
      sponsorId: 'sancor-seguros',
      teams: [
        'la-dolfina',
        'alegria',
        'chapaleufu'
      ]
    },
    'tortugas-grupo-b': {
      ref: 'grupo-b',
      name: 'Grupo "B"',
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
      address: 'Panamericana Ramal Pilar km 38,5, Provincia de Buenos Aires, Argentina',
      email: 'administracion@tortugascountryclub.com.ar',
      name: 'Tortugas Country Club',
      phone: '02320 49-1262'
    },
    'hurlingham': {
      address: 'Av. Roca 1411, Hurlingham, Provincia de Buenos Aires, Argentina',
      email: 'eventos@hurlinghamclub.com.ar',
      name: 'Hurlingham Club',
      phone: '011 4662-5510'
    },
    'palermo': {
      address: 'Av. del Libertador y Dorrego, Palermo, Buenos Aires, Argentina',
      email: 'torneos@aapolo.com',
      name: 'Argentino Abierto de Polo',
      phone: '011 4777-6444'
    }
  },
  sponsorsById: {
    'prevencion-salud': {
      id: 'prevencion-salud',
      name: 'Prevención Salud'
    },
    'sancor-seguros': {
      id: 'sancor-seguros',
      name: 'Sancor Seguros'
    }
  },
  byId: {
    'tortugas': {
      active: true,
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
      active: false,
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
      active: false,
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
