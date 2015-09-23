import { combineReducers } from 'redux';
import { reducer as fixtures } from './fixtures';
import { reducer as tournaments } from './tournaments';
import { reducer as teams } from './teams';

export default combineReducers({
  fixtures,
  tournaments,
  teams
});
