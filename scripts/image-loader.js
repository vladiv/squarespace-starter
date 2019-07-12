import ImageLoader from '@squarespace/core/ImageLoader';
import { debounce } from './debounce';

export default function () {
  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', function () {
    debounce(loadAllImages);
  }, false);
}

// Load all images via Squarespace's Responsive ImageLoader
function loadAllImages() {
  const images = document.querySelectorAll('img[data-src]');

  for (let i = 0; i < images.length; i++) {
    ImageLoader.load(images[i], {
      load: true
    });
  }
}
