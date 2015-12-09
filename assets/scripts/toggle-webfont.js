(function (d) {
  "use strict";

  var c;
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
    c = d.body.classList;
    d.getElementById("toggle-webfont").addEventListener("click", toggle, false);
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})(document);
