module.exports = function(rowId) {
    if (!!this.selectedRows.find(row=>String(row[this.opts.uniqueKey])===String(rowId))) {
        this.unselectRow(rowId)
    } else {
        this.selectRow(rowId)
    }

    return this.selectedRows
}
