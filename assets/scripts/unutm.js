/**
 * @preserve unutm.js
 *
 * LICENSE: http://hail2u.mit-license.org/2013
 */
(function (l, h) {
  if (!l.search || !h.replaceState) {
    return;
  }

  var unutm = function () {
    var u = l.pathname +
      l.search.replace(/[?&]utm_[^&]+/g, '').replace(/^&/, '?') +
      l.hash;
    h.replaceState(null, '', u);
  };

  if (typeof ga === 'function') {
    ga(unutm());
  } else {
    unutm();
  }
})(location, history);
