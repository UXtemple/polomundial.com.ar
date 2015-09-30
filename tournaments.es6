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
        'equipo-xxx'
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
        'equipo-xxxx'
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
        'equipo-xxx'
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
        'equipo-xxxx'
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
      email: 'administracion@hurlinghamcountryclub.com.ar',
      name: 'Hurlingham Country Club',
      phone: '011 4662-5510'
    },
    'palermo': {
      address: 'Arévalo 3065, Palermo, Buenos Aires, Argentina',
      email: 'administracion@palermocountryclub.com.ar',
      name: 'Palermo Country Club',
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
