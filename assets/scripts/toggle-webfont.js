(function (d) {
  "use strict";

  var toggle = function (evt) {
    d.body.classList.toggle("no-webfont");
  };

  var init = function () {
    d.getElementById("toggle-webfont").addEventListener("click", toggle, false);
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})(document);
