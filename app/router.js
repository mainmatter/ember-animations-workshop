import EmberRouter from '@ember/routing/router';
import config from 'ember-animations-workshop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('album', { path: '/album/:album_id' });
});
