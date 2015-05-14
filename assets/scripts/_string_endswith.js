if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, position) {
    "use strict";

    var index = 0;
    var subject = this.toString();

    if (position === undefined || position > subject.length) {
      position = subject.length;
    }

    position -= search.length;
    index = subject.lastIndexOf(search, position);

    return index !== -1 && index === position;
  };
}
/* eslint no-extend-native:0 */
