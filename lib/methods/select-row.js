module.exports = function (row) {
    var id = this.opts.uniqueKey;

    if (this.opts.selectable.type === 'single') {
        this.selectedRows = [row]
    } else {
        if (this.isRowSelected(row)) {
            this.selectedRows = this.selectedRows.filter(R => R[id] !== row.id)
        } else {
            this.selectedRows.push(row)
        }
    }
}