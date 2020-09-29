import Component from '@ember/component';

export default Component.extend({
    id: null,
    firstname: null,
    lastname: null,
    fullname: null,
    age: null,
    balance: null,
    actions:{
        getRecord(){
            let person = store.findAll('name');
        }
    }
});
