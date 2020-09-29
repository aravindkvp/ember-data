import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',
    init() {
        this._super(...arguments);
    
        this.set('headers', {
          'API_KEY': 'secret key',
          'ANOTHER_HEADER': 'Some header value'
        });
      },
     
});
