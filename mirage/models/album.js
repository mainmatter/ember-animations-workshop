import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  artist: belongsTo('artist'),
});
