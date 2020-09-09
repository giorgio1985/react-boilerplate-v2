import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the team state domain
 */

const selectTeamDomain = state => state.team || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Team
 */

const makeSelectTeam = () =>
  createSelector(
    selectTeamDomain,
    substate => substate,
  );

export default makeSelectTeam;
export { selectTeamDomain };
