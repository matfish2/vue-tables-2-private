module.exports = function(rowIds) {
    rowIds.forEach(id=>this.selectRow(id))

    return this.selectedRows;
}
