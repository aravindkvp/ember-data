import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    superhero: DS.belongsTo('superhero'),
    superhero2: DS.belongsTo('superhero'),
    message: DS.attr('string')

});
