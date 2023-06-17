import Component from '@glimmer/component';
import { service } from '@ember/service';

import './now-playing.css';

export default class NowPlayingComponent extends Component {
  @service player;
}
