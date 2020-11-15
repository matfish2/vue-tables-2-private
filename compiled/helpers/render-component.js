"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(props, h, component) {
  return props.override ? props.override : h(component, {
    props: props
  });
}