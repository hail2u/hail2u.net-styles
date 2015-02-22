(function () {
  'use strict';

  var t = function () {
    var logo = document.querySelector('.logo');
    var tagline = document.querySelector('.tagline');
    var article = document.getElementById('introduction');
    logo.addEventListener('click', function (evt) {
      if (tagline.hidden) {
        tagline.hidden = false;
        article.removeAttribute('role');
      } else {
        tagline.hidden = true;
        article.setAttribute('role', 'main');
      }

      evt.preventDefault();
      evt.stopPropagation();
    }, false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', t, false);
  } else {
    t();
  }
})();
