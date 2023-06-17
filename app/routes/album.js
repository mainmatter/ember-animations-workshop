import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AlbumRoute extends Route {
  @service player;
  @service store;

  model({ album_id }) {
    return this.store.peekRecord('album', album_id);
  }
}
