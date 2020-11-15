"use strict";

// import bus from '../bus';
module.exports = function () {
  var event = 'vue-tables';
  if (this.name) event += '.' + this.name;
  this.opts.customFilters.forEach(function (filter) {// bus.$off(`${event}.filter::${filter.name}`);
    // bus.$on(`${event}.filter::${filter.name}`, value => {
    //  this.customQueries[filter.name] = value;
    // this.updateState('customQueries', this.customQueries);
    // });
  });
};