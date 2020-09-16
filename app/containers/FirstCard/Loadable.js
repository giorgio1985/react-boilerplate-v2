/**
 *
 * Asynchronously loads the component for FirstCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
