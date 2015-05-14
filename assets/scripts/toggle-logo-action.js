/**
 * @preserve toggle-logo-action.js
 *
 * LICENSE: http://hail2u.mit-license.org/2014
 */
(function (w, d) {
  "use strict";

  var debounce = function (fn, delay) {
    var timeout = null;

    return function () {
      var args = arguments;
      var context = this;
      var delayed = function () {
        fn.apply(context, args);
        timeout = null;
      };

      if (timeout) {
        w.clearTimeout(timeout);
      }

      timeout = w.setTimeout(delayed, delay);
    };
  };

  var scrollToTop = function (evt) {
    var root = d.documentElement;
    var styleRoot = root.style;
    var doScroll = function () {
      styleRoot.transition = styleRoot.transform = "initial";
      w.scrollTo(0, 0);
      root.removeEventListener("transitionend", doScroll, false);
    };
    var scrollDistance = w.pageYOffset;
    root.addEventListener("transitionend", doScroll, false);
    styleRoot.transition = "transform 1s ease-in-out";
    styleRoot.transform = "translate3d(0, " + scrollDistance + "px, 0)";
    evt.preventDefault();
  };

  var init = function () {
    var logo = d.querySelector(".logo");
    var classToTop = " to-top";
    var reClassToTop = new RegExp(classToTop);
    var hrefLogo = logo.href;
    var fragToTop = "#top";
    var toggleLogoAction = debounce(function () {
      if (w.pageYOffset < logo.scrollHeight) {
        logo.removeEventListener("click", scrollToTop, false);
        logo.className = logo.className.replace(reClassToTop, "");

        if (hrefLogo) {
          hrefLogo = "/";
        }

        return;
      }

      if (hrefLogo && hrefLogo.endsWith(fragToTop)) {
        return;
      }

      logo.addEventListener("click", scrollToTop, false);
      logo.className += classToTop;

      if (hrefLogo) {
        hrefLogo = fragToTop;
      }
    }, 500);
    w.addEventListener("scroll", toggleLogoAction, false);
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})(window, document);
