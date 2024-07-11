import { test, assert } from 'vitest';
import { isLove } from './app.js'; 



test('isLove function tests', () => {

    assert.equal(isLove(1, 4), true);

   
    assert.equal(isLove(2, 2), false);

  
    assert.equal(isLove(0, 1), true);

    assert.equal(isLove(0, 0), false);
});
