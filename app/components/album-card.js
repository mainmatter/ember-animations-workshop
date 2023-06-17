import Component from '@glimmer/component';
import { service } from '@ember/service';

import './album-card.css';

export default class AlbumCardComponent extends Component {
  @service player;
}
