import group from './group/panel';
import home from './home/panel';
import team from './team/panel';
import tournament from './tournament/panel';

export default {
  '/': home,
  '/:tournamentId': tournament,
  '/:tournamentId/:groupRef': group,
  '/:tournamentId/:groupRef/:teamId': team
};
