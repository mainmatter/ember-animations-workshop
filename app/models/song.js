import Model, { attr, belongsTo } from '@ember-data/model';

export default class SongModel extends Model {
  @attr name;

  @belongsTo('artist', { async: false, inverse: 'songs' }) artist;
  @belongsTo('album', { async: false, inverse: 'songs' }) album;
}
