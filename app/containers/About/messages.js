/*
 * About Messages
 *
 * This contains all the text for the About container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.About';

export default defineMessages({
  about: {
    id: `${scope}.about`,
    defaultMessage: 'This is the About container!',
  },
  underTitle: {
    id: `${scope}.underTitle`,
    defaultMessage: 'This is the About container!',
  },
});
