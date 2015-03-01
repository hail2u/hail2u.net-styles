/**
 * @preserve lightbox.js
 *
 * LICENSE: http://hail2u.mit-license.org/2015
 */
(function (d) {
  'use strict';

  var toggle = function (image, evt) {
    if (evt.which !== 1) {
      return;
    }

    evt.preventDefault();

    if (this.style.cssText && image.style.cssText) {
      if (image.originalsrc) {
        image.src = image.originalsrc;
        delete image.originalsrc;
      }

      this.style.cssText = '';
      image.style.cssText = '';

      return;
    }

    if (this.href !== image.src) {
      image.originalsrc = image.src;
      image.src = this.href;
    }

    this.style.backgroundColor = '#fff';
    this.style.cursor = 'zoom-out';
    this.style.height = '100vh';
    this.style.left = '0';
    this.style.position = 'fixed';
    this.style.top = '0';
    this.style.width = '100vw';
    this.style.zIndex = '2';
    image.style.bottom = '0';
    image.style.height = 'auto';
    image.style.left = '0';
    image.style.margin = 'auto';
    image.style.maxHeight = '96%';
    image.style.maxWidth = '96%';
    image.style.position = 'absolute';
    image.style.right = '0';
    image.style.top = '0';
    image.style.width = 'auto';
  };

  var init = function () {
    var i;
    var image;
    var images = d.querySelectorAll([
      'main img[src^="assets/images/"]',
      'main img[src^="/images/"]'
    ].join(','));
    var l;
    var parent;

    for (i = 0, l = images.length; i < l; i++) {
      image = images[i];
      parent = image.parentNode;

      if (
        parent.tagName === 'A' &&
        /^(assets)?\/images\//.test(parent.getAttribute('href'))
      ) {
        parent.addEventListener('click', toggle.bind(parent, image), false);
      }
    }
  };

  if (!('querySelectorAll' in d) || !('bind' in Function)) {
    return;
  }

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', init, false);
  } else {
    init();
  }
})(document);
