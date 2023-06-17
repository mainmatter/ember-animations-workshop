import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr name;
  @attr description;
  @attr cover;

  @belongsTo('artist', { async: false, inverse: 'albums' }) artist;
  @hasMany('songs', { async: false, inverse: 'album' }) songs;
}
