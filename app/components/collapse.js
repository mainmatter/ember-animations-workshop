import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import './collapse.css';

export default class CollapseComponent extends Component {
  @tracked isOpen = false;

  @action
  async toggle() {
    this.isOpen = !this.isOpen;
  }
}
