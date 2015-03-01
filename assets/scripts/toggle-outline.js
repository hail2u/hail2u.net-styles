(function (d) {
  'use strict';

  var toggle = function () {
    this.classList.toggle('show-outline');
  };

  var init = function () {
    d.body.addEventListener('dblclick', toggle, false);
  };

  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', init, false);
  } else {
    init();
  }
})(document);
