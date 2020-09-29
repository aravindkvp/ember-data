import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        let persons = this.store.query('name',{
            age: 45
        });
        this.controllerFor('route1').set('queryrecords',persons);

        let singlerecord = this.store.queryRecord('name',{singlerecord: true,age:45});
        this.controllerFor('route1').set('singlerecord',singlerecord);

        
        return this.store.findAll('name');
    },
    actions:{
        getRecord(personid){
            let person = this.store.findRecord('name',personid);
            this.controllerFor('route1').set('record1',person);
        },
        peekRecord(personid){
            let person = this.store.peekRecord('name',personid);
            this.controllerFor('route1').set('record2',person);
        }
    }
});
