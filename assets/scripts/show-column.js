(function () {
  var c = 'show-column';

  if (!('classList' in document.createElement('_'))) {
    var re = new RegExp(' \\b' + c + '\\b');
    document.body.addEventListener('dblclick', function () {
      if (re.test(this.className)) {
        this.className = this.className.replace(re, '');
      } else {
        this.className += ' ' + c;
      }
    }, false);

    return;
  }

  document.body.addEventListener('dblclick', function () {
    this.classList.toggle(c);
  }, false);
})();
