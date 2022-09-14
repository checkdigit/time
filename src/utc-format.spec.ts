// utc-format.spec.ts

import { strict as assert } from 'node:assert';

import { utcFormat } from './index';

describe('utc-format', () => {
  it('works', () => {
    assert.equal(utcFormat(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'yyyy-MM-dd'), '2022-09-13');
    assert.equal(
      utcFormat(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'yyyy-MM-dd-hh-mm-ss'),
      '2022-09-13-05-38-00'
    );
  });

  it('matches toISOString', () => {
    // make sure works during EST spring forward
    assert.equal(
      utcFormat(new Date('2038-03-14T02:07:44.594Z'), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
      '2038-03-14T02:07:44.594Z'
    );

    for (let _ = 0; _ < 10_000; _++) {
      const isoString = new Date(Math.floor(Math.random() * 10_000_000_000_000)).toISOString();
      assert.equal(new Date(isoString).toISOString(), isoString, 'whoops');
      assert.equal(utcFormat(new Date(isoString), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"), isoString, 'woosdfsdf');
    }
  });
});
