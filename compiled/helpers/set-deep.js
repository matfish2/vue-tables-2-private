"use strict";

/**
 * Dynamically sets a deeply nested value in an object.
 * Optionally "bores" a path to it if its undefined.
 * @function
 * @param {!object} obj  - The object which contains the value you want to change/set.
 * @param {!array} path  - The array representation of path to the value you want to change/set.
 * @param {!mixed} value - The value you want to set it to.
 * @param {boolean} setrecursively - If true, will set value of non-existing path as well.
 */
module.exports = function setDeep(obj, path, value) {
  var setrecursively = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  path.reduce(function (a, b, level) {
    if (setrecursively && typeof a[b] === "undefined" && level !== path.length) {
      a[b] = {};
      return a[b];
    }

    if (level === path.length) {
      a[b] = value;
      return value;
    }

    return a[b];
  }, obj);
};