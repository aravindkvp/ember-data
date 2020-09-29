import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default JSONAPISerializer.extend({
    attrs:{
        firstname: 'first-name',
        lastname: 'last-name'
    },
    keyForRelationship(key, relationship) {
        return key + 'Ids';
    },
    serialize(snapshot,options){
        let json = this._super(...arguments);
        json.data.attributes.nickname = json.data.attributes.heroname;
        delete json.data.attributes.heroname;
        return json;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(Array.isArray(payload.data)){
            payload.data.forEach(element => {
                element.attributes.heroname = element.attributes.nickname;
                delete element.attributes.nickname
            });
        }
        else{
            payload.data.attributes.heroname = payload.data.attributes.nickname;
            delete payload.data.attributes.nickname;
            
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    
});
