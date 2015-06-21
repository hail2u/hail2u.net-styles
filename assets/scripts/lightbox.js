/**
 * @preserve lightbox.js
 *
 * LICENSE: http://hail2u.mit-license.org/2015
 */
(function (d) {
  "use strict";

  var toggle = function (evt) {
    var image = evt.srcElement;
    var parent = image.parentNode;

    if (evt.which !== 1) {
      return;
    }

    evt.preventDefault();

    if (parent.style.cssText && image.style.cssText) {
      if (image.originalsrc) {
        image.src = image.originalsrc;
        delete image.originalsrc;
      }

      parent.style.cssText = "";
      image.style.cssText = "";

      return;
    }

    if (parent.href !== image.src) {
      image.originalsrc = image.src;
      image.src = parent.href;
    }

    parent.style.backgroundColor = "#fff";
    parent.style.cursor = "zoom-out";
    parent.style.height = "100vh";
    parent.style.left = "0";
    parent.style.position = "fixed";
    parent.style.top = "0";
    parent.style.width = "100vw";
    parent.style.zIndex = "100";
    image.style.bottom = "0";
    image.style.height = "auto";
    image.style.left = "0";
    image.style.margin = "auto";
    image.style.maxHeight = "96%";
    image.style.maxWidth = "96%";
    image.style.position = "absolute";
    image.style.right = "0";
    image.style.top = "0";
    image.style.width = "auto";
  };

  var init = function () {
    var i;
    var images = d.querySelectorAll([
      ".content img[src^=\"assets/images/\"]",
      ".content img[src^=\"/images/\"]"
    ].join(","));
    var l = images.length;
    var parent;

    for (i = 0; i < l; i++) {
      parent = images[i].parentNode;

      if (
        parent.tagName === "A" &&
        /^(assets)?\/images\//.test(parent.getAttribute("href"))
      ) {
        parent.addEventListener("click", toggle, false);
      }
    }
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})(document);
