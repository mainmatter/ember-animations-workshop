import { modifier } from 'ember-modifier';

export default modifier(function animateHeight(
  element,
  positional,
  { isOpen = false }
) {
  // short solution
  let targetHeight = isOpen ? element.scrollHeight : 0;
  element.style.height = `${targetHeight}px`;
});
