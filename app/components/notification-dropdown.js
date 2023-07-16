import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';

import './notification-dropdown.css';

async function timeout(duration) {
  await new Promise((resolve) => setTimeout(resolve, duration));
}

export default class NotificationDropdownComponent extends Component {
  @tracked isOpen = false;
  @tracked ringing = false;

  @tracked notifications = [
    'Tomster just dropped a new track.',
    'Zoey will be performing live at EmberConf!',
  ];

  constructor() {
    super(...arguments);

    this.notificationsRingTask.perform();
  }

  notificationsRingTask = task(async () => {
    while (true) {
      if (!this.notifications.length && this.ringing) {
        this.ringing = false;
      }

      await timeout(900);

      while (this.notifications.length) {
        this.ringing = true;
        await timeout(900);
        this.ringing = false;
        await timeout(2700);
      }
    }
  });

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
