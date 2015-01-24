(function () {
  var t = function () {
    var logo = document.querySelector('.logo');
    var tagline = document.querySelector('.tagline');
    logo.addEventListener('click', function (evt) {
      if (tagline.hidden) {
        tagline.hidden = false;
      } else {
        tagline.hidden = true;
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
