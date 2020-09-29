import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | route1', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:route1');
    assert.ok(controller);
  });
});
