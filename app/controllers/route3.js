import Controller from '@ember/controller';

export default Controller.extend({
    currentnode: 1,
    node:null,
    actions:{
        update(){
            this.set('node',this.store.findRecord('node',this.currentnode));
        }
    }
    
});
