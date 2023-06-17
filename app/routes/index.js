import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    let albums = this.store.peekAll('album');
    return {
      playNow: albums.slice(0, 2),
      new: albums.slice(2, 7),
    };
  }
}
