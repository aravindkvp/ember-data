import Transform from '@ember-data/serializer/transform';

export default Transform.extend({
  deserialize(serialized) {
    return serialized /100;
  },

  serialize(deserialized) {
    return deserialized * 100;
  }
});
