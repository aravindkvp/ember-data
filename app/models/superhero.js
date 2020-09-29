import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    comments:DS.hasMany('comment',{inverse:'superhero'}),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    heroname: DS.attr('string'),
    paymentMethods: DS.hasMany('payment-method', { polymorphic: true }),
    colors: DS.hasMany('color')
});
