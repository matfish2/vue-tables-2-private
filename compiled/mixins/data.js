"use strict";

module.exports = function () {
  return {
    id: makeId(),
    allFilteredData: [],
    openChildRows: [],
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : null,
    userMultiSorting: {},
    editing: [],
    selectedIndex: false,
    loadingError: false,
    cancelToken: null,
    drawCounter: 0,
    initialRequestSent: false,
    refs: {
      genericFilter: null,
      table: null,
      filters: {}
    }
  };
};

function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}