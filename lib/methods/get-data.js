module.exports = function (promiseOnly, additionalData = {}, emitLoading = true) {

    if (!this.opts.sendInitialRequest && !this.initialRequestSent) {
        this.initialRequestSent = true;
        this.loading = true;
    }

    var data = this.opts.requestAdapter(this.getRequestParams(additionalData));

    this.drawCounter++

    if (emitLoading) {
        this.dispatch('loading', data);
    }

    var promise = this.sendRequest(data);

    if (promiseOnly) return promise;

    return promise.then(function (response) {
        if (typeof response !== 'undefined') {
            this.cancelToken = null
            this.loading = false;
            this.loadingError = false;
            return this.setData(response);
        } else {
            return false;
        }
    }.bind(this));
}
