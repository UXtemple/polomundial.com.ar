import { combineReducers } from 'redux';
import finals from './finals/reducer';
import { reducer as fixtures } from './fixtures';
import { reducer as tournaments } from './tournaments';
import { reducer as teams } from './teams';

export default combineReducers({
  finals,
  fixtures,
  tournaments,
  teams
});
