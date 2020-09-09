import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the portfolio state domain
 */

const selectPortfolioDomain = state => state.portfolio || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Portfolio
 */

const makeSelectPortfolio = () =>
  createSelector(
    selectPortfolioDomain,
    substate => substate,
  );

export default makeSelectPortfolio;
export { selectPortfolioDomain };
