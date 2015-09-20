import { reducer as tournaments } from './tournaments';
import { reducer as teams } from './teams';

export default function getInitialState(panelProps) {
  return {
    tournaments: tournaments(),
    teams: teams()
  };
}
