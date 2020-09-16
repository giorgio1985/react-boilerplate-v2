import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the firstCard state domain
 */

const selectFirstCardDomain = state => state.firstCard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FirstCard
 */

const makeSelectFirstCard = () =>
  createSelector(
    selectFirstCardDomain,
    substate => substate,
  );

export default makeSelectFirstCard;
export { selectFirstCardDomain };
