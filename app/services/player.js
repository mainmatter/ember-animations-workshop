import Service, { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlayerService extends Service {
  @service store;

  @tracked album = null;
  @tracked playState = null;

  @action
  play(albumId) {
    if (albumId) {
      this.album = this.store.peekRecord('album', albumId);
    }

    if (this.album) {
      this.playState = 'playing';
    }
  }

  @action
  pause() {
    this.playState = 'paused';
  }

  @action
  stop() {
    this.playState = null;
    this.album = null;
  }

  get isPlaying() {
    return this.album && this.playState === 'playing';
  }
}
