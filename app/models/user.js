import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    paymentMethods: DS.hasMany('payment-method'),
    name: DS.attr('string')
});
