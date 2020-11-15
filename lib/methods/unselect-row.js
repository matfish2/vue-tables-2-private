module.exports = function(rowId) {
    this.selectedRows = this.selectedRows.filter(row=>String(row[this.opts.uniqueKey])!==String(rowId));

    return this.selectedRows;
}
