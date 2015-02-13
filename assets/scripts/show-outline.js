(function () {
  var t = function () {
    var c = 'show-outline';
    document.body.addEventListener('dblclick', function () {
      this.classList.toggle(c);
    }, false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', t, false);
  } else {
    t();
  }
})();
