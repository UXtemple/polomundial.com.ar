import group from './group/panel';
import home from './home/panel';
import fixture from './fixture/panel';
import team from './team/panel';
import theFinal from './final/panel';
import tournament from './tournament/panel';

export default {
  '/': home,
  '/:tournamentId': tournament,
  '/:tournamentId/la-final': theFinal,
  '/:tournamentId/fixture': fixture,
  '/:tournamentId/:groupRef': group,
  '/:tournamentId/:groupRef/:teamId': team
};
