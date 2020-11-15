"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = omit;

function omit(obj) {
  delete obj.override;
  return obj;
}