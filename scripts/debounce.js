/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */

export function debounce(fn) {
  // Setup a timer
  let timeout;

  // Setup the arguments
  let _this = this;
  let args = arguments;

  // If there's a timer, cancel it
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  // Setup the new requestAnimationFrame()
  timeout = window.requestAnimationFrame(function () {
    fn.apply(_this, args);
  });
}
