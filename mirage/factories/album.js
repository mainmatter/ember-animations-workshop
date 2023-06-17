import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name() {
    return faker.lorem.sentence({ min: 1, max: 5 });
  },
  description() {
    return faker.lorem.lines();
  },
  cover() {
    return faker.image.urlLoremFlickr({ category: 'nature' });
  },
});
