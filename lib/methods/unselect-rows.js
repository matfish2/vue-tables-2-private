module.exports = function(rowIds) {
    rowIds = rowIds.map(id=>String(id));

    this.selectedRows = this.selectedRows.filter(row=>!rowIds.includes(String(row[this.opts.uniqueKey])));

    return this.selectedRows;
}
