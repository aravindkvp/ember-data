
import DS from 'ember-data';
import {computed} from '@ember/object';
const {Model} = DS;

export default Model.extend({
    supehero: DS.belongsTo('superhero'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    fullname: computed('firstname','lastname',function(){
        return this.firstname + ' ' + this.lastname;
    }),
    age: DS.attr('number'),
    balance: DS.attr('dollar')
});