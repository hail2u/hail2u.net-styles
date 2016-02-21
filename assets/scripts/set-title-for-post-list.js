/**
 * @preserve set-title-for-post-list.js
 *
 * LICENSE: http://hail2u.mit-license.org/2016
 */
(function (d) {
  "use strict";

  var load = function () {
    var n = d.querySelectorAll("*");
    var i;
    var l = n.length;

    for (i = 0; i < l; i++) {
      var e = n[i];

      if (window.getComputedStyle(e)["text-overflow"] === "ellipsis") {
        e.title = e.textContent;
      }
    }
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", load, false);
  } else {
    load();
  }
})(document);
