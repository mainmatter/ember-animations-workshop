import { modifier } from 'ember-modifier';

export default modifier(function animateHeight(
  element,
  positional,
  { isOpen = false }
) {
  // long solution

  // fromHeight is the current height of the element;.
  let fromHeight = element.clientHeight;

  // toHeight is either 0 (when closing)
  // or the natural height of the element.
  let toHeight = 0;
  if (isOpen) {
    // Unset the height, so we can get the natural height of the element.
    element.style.height = 'unset';
    toHeight = element.clientHeight;
  }

  // Set the height we want to animate from
  element.style.height = `${fromHeight}px`;

  // After 1 browser tick, set the target height.
  // The CSS transition will trigger because of this.
  setTimeout(() => {
    element.style.height = `${toHeight}px`;
  }, 0);
});
