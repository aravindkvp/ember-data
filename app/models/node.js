import Model from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    parent: DS.belongsTo('node',{inverse: 'children'}),
    children: DS.hasMany('node',{inverse: 'parent'}),
    name: DS.attr('string')
});
