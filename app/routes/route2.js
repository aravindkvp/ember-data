import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';


export default Route.extend({
    data: service(),
   init(){
        this.set('person',null);
        //let red = this.store.createRecord('color',{id:1,name: 'red'});
        //let green = this.store.createRecord('color',{id:2,name: 'green'});
        //let blue = this.store.createRecord('color',{id:3,name: 'blue'});
        this.store.findAll('superhero');
       // this.store.peekRecord('superhero',1);
      //  console.log(this.store.peekRecord('superhero',1));
        
        //batman.get('colors').pushObject(red);
        this._super(...arguments);
    },
    model(){
        let person = this.store.findRecord('superhero',1).then(function(person){
            return person;
        });
        let red = this.store.createRecord('color',{id:1,name: 'red'});
        let green = this.store.createRecord('color',{id:2,name: 'green'});
        let blue = this.store.createRecord('color',{id:3,name: 'blue'});
        this.store.findRecord('superhero',1).then(function(person){
            console.log(person.colors);
        });
        let obj =  this.store.peekAll('superhero');
        return obj;
    },
    actions:{
        addRecord(){
            let person = this.store.createRecord('superhero',{
                id: this.controllerFor('route2').addid,
                firstname: this.controllerFor('route2').addfirstname,
                lastname: this.controllerFor('route2').addlastname,
                heroname: this.controllerFor('route2').addheroname,
            })
            person.save();
        },
        updateRecord(){
            let controller = this.controller;
            this.person = this.store.findRecord('superhero',this.controller.addid).then(function(person){
               // console.log(person.get('hasDirtyAttributes'));
                person.set('firstname',controller.addfirstname);
                person.set('lastname',controller.addlastname);
                person.set('heroname',controller.addheroname);
             //   console.log(person.changedAttributes());
             //   person.rollbackAttributes();
               // console.log(person.get('hasDirtyAttributes'));
                person.save(); 
            })
        },

        deleteRecord(){
            let controller = this.controller;
            let person = this.store.findRecord('superhero',this.controller.addid,{ backgroundReload: false }).then(function(person){
             //   person.deleteRecord();
             //   person.save();
                person.destroyRecord();
            })
        },
        addComment(){
            let comment = this.store.createRecord('comment',{
                message: this.controller.addcomment,
            });
            let person = this.store.findRecord('superhero',this.controller.addid).then(function(person){
                comment.set('superhero',person);
            });
            comment.save();

             
            
            /*  let person = this.store.findRecord('superhero',this.controller.addid).then(function(person){
                person.get('comments').pushObject(comment);
                person.save();
            });*/
        }
    
    }
    
})
