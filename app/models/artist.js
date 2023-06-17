import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr name;

  @hasMany('album', { async: false, inverse: 'artist' }) albums;
  @hasMany('song', { async: false, inverse: 'artist' }) songs;
}
