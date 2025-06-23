import { describe, it } from 'vitest';

import { initLog } from '../src/log';

describe('Log Tests', () => {
  it('Should init logger', () => {
    initLog('debug');
  });
});
