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
    w.scrollTo(0, 0);
    evt.preventDefault();
  };

  var init = function () {
    var logo = document.querySelector(".logo");
    var heightLogo = logo.scrollHeight;
    var toggleLogoAction = debounce(function () {
      if (w.pageYOffset > heightLogo) {
        logo.addEventListener("click", scrollToTop, false);

        if (logo.tagName === "A") {
          logo.href = "#top";
        }

        return;
      }

      logo.removeEventListener("click", scrollToTop, false);

      if (logo.tagName === "A") {
        logo.href = "/";
      }
    }, 500);

    toggleLogoAction();
    w.addEventListener("scroll", toggleLogoAction, false);
  };

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", init, false);
  } else {
    init();
  }
})(window, document);
