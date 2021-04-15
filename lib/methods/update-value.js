var clone = require('lodash.clonedeep')
var setDeep = require('../helpers/set-deep')

module.exports = function _updateValue(row, column) {

    return function (e) {
        var oldVal = null;

        setDeep(row, column.split('.'), getValue(e));

        var data = clone(this.data).map(r => {
            if (r[this.opts.uniqueKey] === row[this.opts.uniqueKey]) {
                oldVal = this._getValue(r, column)
                return row;
            }

            return r;
        });

        this.dispatch('input', data);
        this.dispatch('update', {row, column, oldVal, newVal: this._getValue(row,column)})
    }.bind(this)
}

function getValue(val) {
    if (val.target) {
        return val.target.type === 'checkbox' ? val.target.checked : val.target.value;
    }

    return val;
}
