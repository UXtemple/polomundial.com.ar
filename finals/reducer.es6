import { GET_FINAL } from './actions';

const FIXED = {
  isLoading: false,
  isReady: false,
  byTournamentId: {
    'tortugas': {
      active: false,
    },
    'hurlingham': {
      active: false
    },
    'palermo': {
      active: false
    }
  }
};

export default function reducer(state=FIXED, action={}) {
  let nextState = state;

  switch (action.type) {
  case GET_FINAL:
    if (action.sequence.type === 'start') {
      nextState = {
        ...state,
        isLoading: true
      };
    } else if (action.error) {
      nextState = {
        ...state,
        isLoading: false,
        error: true,
        message: action.payload
      };
    } else {
      nextState = {
        ...state,
        isLoading: false,
        isReady: true,
        byTournamentId: {
          ...state.byTournamentId,
          tortugas: action.payload
        }
      };
    }
    break;
  default: break;
  }

  return nextState;
}
