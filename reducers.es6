import { combineReducers } from 'redux';
import { reducer as tournaments } from './tournaments';
import { reducer as teams } from './teams';

export default combineReducers({
  tournaments,
  teams
});
