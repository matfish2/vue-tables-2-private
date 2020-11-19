"use strict";

module.exports = function (promiseOnly) {
  var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emitLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!this.opts.sendInitialRequest && !this.initialRequestSent) {
    this.initialRequestSent = true;
    this.loading = true;
  }

  var data = this.opts.requestAdapter(this.getRequestParams(additionalData));
  this.drawCounter++;
  data = this.opts.requestAdapter(data);

  if (emitLoading) {
    this.dispatch('loading', data);
  }

  var promise = this.sendRequest(data);
  if (promiseOnly) return promise;
  return promise.then(function (response) {
    if (typeof response !== 'undefined') {
      this.cancelToken = null;
      this.loading = false;
      this.loadingError = false;
      return this.setData(response);
    } else {
      return false;
    }
  }.bind(this));
};