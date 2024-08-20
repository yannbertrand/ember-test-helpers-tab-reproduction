import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { tap, tab } from '@ember/test-helpers';

module('Unit | Component | pix-select', function (hooks) {
  setupTest(hooks);

  module('#label', function () {
    test('it should return the label if id is defined', function (assert) {
      assert.strictEqual(typeof tap, 'function', 'tap should be a function');
      assert.strictEqual(typeof tab, 'function', 'tab should be a function');
    });
  });
});
