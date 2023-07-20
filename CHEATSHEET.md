# Animations workshop Cheatsheet/resources

## Exercise 1

https://developer.mozilla.org/en-US/docs/Web/CSS/transition

## Exercise 2

https://developer.mozilla.org/en-US/docs/Web/CSS/animation

## Exercise 3

https://miguelcobain.github.io/ember-css-transitions/docs/insert-destroy

## Exercise 4

https://github.com/ember-modifier/ember-modifier#function-based-modifiers

https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements

## Exercise 5

https://css-tricks.com/animating-layouts-with-the-flip-technique/

https://ember-animation.github.io/ember-animated/docs

## Exercise 6

https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

## Exercise 7

Unfortunately, no easily readable documentation is available for ember-animated's test helpers. The linked file does have some documentation.
https://github.com/ember-animation/ember-animated/blob/master/addon/src/test-support/index.js

`setupAnimationTest()` - sets up ember-animated related assertions and speeds up animations 40x
`await animationsSettled()` - will resolve after all running ember-animated animations have finished
`assert.equalBounds(b1, b2)` - takes 2 DOMRects and checks if they're equal
`bounds(element)` - gets measurements/DOMRect relative to ember-testing container

`time.pause()` - pauses the animation
`time.advance(milliseconds)` - advances the animation by X milliseconds
