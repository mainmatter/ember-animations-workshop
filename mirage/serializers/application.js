import { JSONAPISerializer } from 'miragejs';
import { dasherize } from '@ember/string';

export default JSONAPISerializer.extend({
  typeKeyForModel(model) {
    return dasherize(model.modelName);
  },
});
