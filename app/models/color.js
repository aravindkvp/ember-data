import Model from '@ember-data/model';
import DS from 'ember-data';
export default Model.extend({
    superhero: DS.hasMany('superhero'),
    name: DS.attr('string')
});
