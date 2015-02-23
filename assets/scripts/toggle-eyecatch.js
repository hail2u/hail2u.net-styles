(function () {
  'use strict';

  var t = function () {
    var sectionFooter = document.querySelector('.section-footer');
    var eyecatch = document.querySelector('.full-width');
    sectionFooter.addEventListener('click', function (evt) {
      if (eyecatch.hidden) {
        eyecatch.hidden = false;
      } else {
        eyecatch.hidden = true;
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
