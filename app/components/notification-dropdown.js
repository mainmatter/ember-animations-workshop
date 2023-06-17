import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import './notification-dropdown.css';

export default class NotificationDropdownComponent extends Component {
  @tracked isOpen = false;

  @tracked notifications = [
    'Tomster just dropped a new track.',
    'Zoey will be performing live at EmberConf!',
  ];

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }

  @action
  close() {
    this.isOpen = false;
  }

  @action
  clear() {
    this.notifications = [];
  }
}
