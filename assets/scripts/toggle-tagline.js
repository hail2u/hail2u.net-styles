(function (d) {
  'use strict';

  var toggle = function (tagline, article, evt) {
    if (tagline.hidden) {
      tagline.hidden = false;
      article.removeAttribute('role');
    } else {
      tagline.hidden = true;
      article.setAttribute('role', 'main');
    }

    evt.preventDefault();
    evt.stopPropagation();
  };

  var init = function () {
    var article = d.getElementById('introduction');
    var tagline = d.querySelector('.tagline');
    d.querySelector('.logo').addEventListener(
      'click',
      toggle.bind(null, tagline, article),
      false
    );
  };

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', init, false);
  } else {
    init();
  }
})(document);
