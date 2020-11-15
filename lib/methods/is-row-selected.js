module.exports = function(row) {
    let id = this.opts.uniqueKey

    return !!this.selectedRows.find(Row=>Row[id]===row[id])
}