import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  // author:  //not sure how to do this one yet, but a link to a user ID,
  created: attr('date'),
  lastUpdated: attr('date'),
  comments: hasMany('comments'),
  tags: hasMany('tags')
});
