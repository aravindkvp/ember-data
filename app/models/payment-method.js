import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    user: DS.belongsTo('user', { inverse: 'paymentMethods' }),
});
