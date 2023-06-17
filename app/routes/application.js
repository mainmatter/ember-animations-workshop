import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service player;

  async model() {
    await this.store.query('artist', { include: 'albums.songs' });
  }
}
