import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | data', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('should correctly generate full name', function(assert) {
    let service = this.owner.lookup('service:data');
    service.set('firstName','Mukesh');
    service.set('lastName','Kumar');
    assert.equal(service.get('fullName'),'Mukesh Kumar');
  });

  test('testing "setName" Method ', function(assert) {
    let service = this.owner.lookup('service:data');
    service.setName('Mathan','Kumar');
    assert.equal(service.get('fullName'),'Mathan Kumar');
  });

  
});
