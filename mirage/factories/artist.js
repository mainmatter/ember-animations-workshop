import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name() {
    return faker.person.fullName();
  },

  afterCreate(artist, server) {
    if (!artist.albums?.length) {
      artist.update({
        albums: server.createList('album', 3),
      });
    }
  },
});
