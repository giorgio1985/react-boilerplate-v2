/*
 * FirstCard Messages
 *
 * This contains all the text for the FirstCard container.
 */

import { defineMessages } from 'react-intl';
export const scope = 'boilerplate.containers.FirstCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the FirstCard container!',
  },
  firstCard: {
    id: `${scope}.firstCard`,
    defaultMessage: 'This is the Product container!',
  },
  underTitle: {
    id: `${scope}.underTitle`,
    defaultMessage: 'This is the Product container!',
  },
});
