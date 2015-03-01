(function (d) {
  'use strict';

  var toggle = function (eyecatch, article, evt) {
    if (eyecatch.hidden) {
      eyecatch.hidden = false;
    } else {
      eyecatch.hidden = true;
    }

    article.classList.toggle('has-image');
    evt.preventDefault();
    evt.stopPropagation();
  };

  var init = function () {
    var article = d.getElementById('introduction');
    var eyecatch = d.querySelector('.full-width');
    d.querySelector('.section-footer').addEventListener(
      'click',
      toggle.bind(null, eyecatch, article),
      false
    );
  };

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', init, false);
  } else {
    init();
  }
})(document);
