"use strict";

var _vue = require("vue");

module.exports = function (h, classes, columns, display) {
  if (classes.framework === 'bulma') {
    return (0, _vue.createVNode)("div", {
      "class": classes.menu,
      "style": display ? 'display:block' : 'display:none'
    }, [(0, _vue.createVNode)("div", {
      "class": classes.content
    }, [columns])]);
  }

  if (classes.framework === 'bootstrap4') {
    return (0, _vue.createVNode)("div", {
      "class": classes.menu,
      "style": display ? 'display:block' : 'display:none'
    }, [columns]);
  }

  return (0, _vue.createVNode)("ul", {
    "class": classes.menu,
    "style": display ? 'display:block' : 'display:none'
  }, [columns]);
};