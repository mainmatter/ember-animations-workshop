import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-animations-workshop/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | ember animated', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('the album card cover should animate when navigating between index and album page', async function (assert) {
    this.server.create('artist');

    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });

    await click('[data-test-album-linkto="1"]');

    assert.strictEqual(currentURL(), '/album/1');
    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });
  });
});
