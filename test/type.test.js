/* eslint-disable no-undef */
import LAUNCH_APP from '../lib/index.esm';

test('Is LAUNCH_APP function?', () => {
  expect(typeof LAUNCH_APP === 'function').toBe(true);
});
