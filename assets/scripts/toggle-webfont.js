(function (d) {
  "use strict";

  var c = d.body.classList;
  var n = "no-webfont";
  var l;

  var toggle = function () {
    c.toggle(n);
    l = this.textContent;

    if (c.contains(n)) {
      l = l.replace(/無/, "有");
    } else {
      l = l.replace(/有/, "無");
    }

    this.textContent = l;
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
