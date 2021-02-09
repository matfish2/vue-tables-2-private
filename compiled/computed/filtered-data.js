"use strict";

var clone = require('lodash.clonedeep');

module.exports = function () {
  this.dispatch('loading');
  var data = clone(this.tableData);
  var column = this.orderBy.column;
  data = this.search(data);

  if (column) {
    // dummy var to force compilation
    if (this.time) this.time = this.time;
    data = this.opts.sortingAlgorithm.call(this, data, column);
  } else if (this.groupBy) {
    data = this.opts.sortingAlgorithm.call(this, data, this.groupBy[0]);
  }

  if (this.vuex) {
    if (this.count != data.length) this.commit('SET_COUNT', data.length);
  } else {
    this.count = data.length;
  }

  this.allFilteredData = JSON.parse(JSON.stringify(data));
  var offset = this.opts.pagination.virtual ? 0 : (this.page - 1) * this.limit;
  var limit = this.opts.pagination.virtual ? this.limit * this.page : this.limit;
  var res = data.splice(offset, limit);

  if (this.groupBy) {
    return toArray(groupData(res, JSON.parse(JSON.stringify(this.groupBy))), this.groupBy);
  }

  this.dispatch('loaded');
  return res;
};

function groupData(data, keys) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var key;
  var result = data.reduce(function (r, a) {
    key = a[keys[i]];
    r[key] = r[key] || [];
    r[key].push(a);
    return r;
  }, Object.create(null));
  i++;

  if (typeof keys[i] === 'string') {
    for (var k in result) {
      result[k] = groupData(result[k], keys, i);
    }
  }

  return result;
}

function toArray(data, groupBy) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var res = [];

  for (var item in data) {
    res.push({
      value: item,
      type: groupBy[i],
      data: typeof groupBy[i + 1] === 'undefined' ? data[item] : toArray(data[item], groupBy, i + 1)
    });
  }

  return res;
}