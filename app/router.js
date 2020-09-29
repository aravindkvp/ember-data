import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
Router.map(function() {
  this.route('route1');
  this.route('route2');
  this.route('route3', function() {});
  this.route('route4');
});
