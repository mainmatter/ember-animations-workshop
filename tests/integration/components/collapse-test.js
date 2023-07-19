import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-animations-workshop/tests/helpers';
import { click, render, find, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | collapse', function (hooks) {
  setupRenderingTest(hooks);

  test('it opens and closes the collapse box', async function (assert) {
    await render(hbs`
      <Collapse @title="Test Collapse">
        template block text
      </Collapse>
    `);

    assert.dom('[data-test-collapse]').doesNotHaveAttribute('open');
    assert.dom('[data-test-collapse-content]').isNotVisible();
    assert.strictEqual(
      getComputedStyle(find('[data-test-collapse-content]')).height,
      '0px'
    );

    await click('[data-test-collapse-summary]');
    await waitUntil(() => {
      return (
        getComputedStyle(find('[data-test-collapse-content]')).height === '24px'
      );
    });

    assert.dom('[data-test-collapse]').hasAttribute('open');
    assert.dom('[data-test-collapse-content]').isVisible();
    assert.strictEqual(
      getComputedStyle(find('[data-test-collapse-content]')).height,
      '24px'
    );
  });
});
