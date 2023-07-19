import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-animations-workshop/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import {
  animationsSettled,
  bounds,
  setupAnimationTest,
  time,
} from 'ember-animated/test-support';

module('Acceptance | ember animated', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  setupAnimationTest(hooks);

  test('the album card cover should animate when navigating between index and album page', async function (assert) {
    this.server.create('artist');

    await visit('/');

    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });
    assert.equalBounds(bounds(find('[data-test-album-card-cover="1"]')), {
      height: 62.5,
      left: 187,
      top: 112.45703125,
      width: 62.5,
    });

    await click('[data-test-album-linkto="1"]');
    await animationsSettled();

    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });
    assert.equalBounds(bounds(find('[data-test-album-card-cover="1"]')), {
      height: 87.5,
      left: 187,
      top: 112,
      width: 87.5,
    });
  });

  test('the album card cover has the correct bounds in the middle of the animation', async function (assert) {
    this.server.create('artist');

    await visit('/');
    time.pause();

    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });
    assert.equalBounds(bounds(find('[data-test-album-card-cover="1"]')), {
      height: 62.5,
      left: 187,
      top: 112.45703125,
      width: 62.5,
    });

    await click('[data-test-album-linkto="1"]');
    await time.advance(250);
    assert.equalBounds(bounds(find('[data-test-album-card-cover="1"]')), {
      height: 75,
      left: 187,
      top: 112,
      width: 75,
    });
    await time.advance(250);

    assert.dom('[data-test-album-card-cover="1"]').exists({ count: 1 });
    assert.equalBounds(bounds(find('[data-test-album-card-cover="1"]')), {
      height: 87.5,
      left: 187,
      top: 112,
      width: 87.5,
    });
  });
});
