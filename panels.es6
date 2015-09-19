import home from './home/panel';
import tournament from './tournament/panel';

export default {
  '/': home,
  '/:tournamentId': tournament
};
