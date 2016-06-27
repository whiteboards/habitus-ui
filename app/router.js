import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page');
  this.route('admin');
  this.route('blog');
  this.route('login');
});

export default Router;
