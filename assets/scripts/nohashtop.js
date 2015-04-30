/**
 * @preserve nohashtop.js
 *
 * LICENSE: http://hail2u.mit-license.org/2015
 */
(function (l) {
  "use strict";

  window.addEventListener("hashchange", function () {
    if (l.hash === "#top") {
      history.replaceState(null, "", l.pathname + l.search);
    }
  }, false);
})(location);
