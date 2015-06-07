/**
 * @preserve load-css.js
 *
 * LICENSE: http://hail2u.mit-license.org/2015
 */
(function (d) {
  "use strict";

  var load = function () {
    var links = d.querySelectorAll('link[class="js-load-css"]');
    var i;
    var l = links.length;

    for (i = 0; i < l; i++) {
      links[i].rel = "stylesheet";
    }
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", load, false);
  } else {
    load();
  }
})(document);
