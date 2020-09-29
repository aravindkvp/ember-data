import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  // Tell the inflector that the plural of "campus" is "campuses"
  inflector.irregular('superhero', 'superheroes');

  // Tell the inflector that the plural of "advice" is "advice"
  inflector.uncountable('advice');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
