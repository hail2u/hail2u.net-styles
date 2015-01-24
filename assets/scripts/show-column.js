(function () {
  var t = function () {
    var c = 'show-column';
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
