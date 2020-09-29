import Service from '@ember/service';
import {computed} from '@ember/object';

export default Service.extend({
    firstName: null,
    lastName: null,
    fullName: computed('firstName','lastName',function(){
        return this.firstName + ' ' + this.lastName;
    }),
    setName(x,y){
        this.set('firstName',x);
        this.set('lastName',y);
    }
});
