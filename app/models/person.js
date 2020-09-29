import Model from '@ember-data/model';
import DS from 'ember-data';
import {computed} from '@ember/object';

export default Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    age: DS.attr('number'),
    fullname: computed('firstname','lastname',function(){
        return this.firstname+' '+this.lastname;
    })
});
