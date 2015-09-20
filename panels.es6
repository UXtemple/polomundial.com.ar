import home from './home/panel';
import tournament from './tournament/panel';
import group from './group/panel';

export default {
  '/': home,
  '/:tournamentId': tournament,
  '/:tournamentId/:groupRef': group
};
