/**
 * @preserve async-csses.js
 *
 * LICENSE: http://hail2u.mit-license.org/2014
 */
(function () {
  var csses = [
    {
      href: '/fonts/megrim.min.css'
    },
    {
      href: '/fonts/source-code-pro.min.css'
    },
    {
      href: '/fonts/source-sans-pro.min.css'
    }
  ];
  var links = document.createDocumentFragment();
  csses.forEach(function (css) {
    if (!/^https?:/.test(css.href) && location.protocol === 'file:') {
      css.href = './assets' + css.href;
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = css.href;

    if (css.media) {
      link.media = css.media;
    }

    links.appendChild(link);
  });
  document.head.appendChild(links);
})();
