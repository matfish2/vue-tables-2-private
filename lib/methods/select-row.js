module.exports = function (rowId) {
    if (alreadySelected(rowId, this.selectedRows, this.opts.uniqueKey)) {
        console.warn(`Row ${rowId} already selected`);
        return;
    }

    const row = this.data.find(row => String(row[this.opts.uniqueKey]) === String(rowId));

    if (!row) {
        console.warn(`Row ${rowId} was not found`);
        return;
    }

    this.selectedRows.push(row);

    return this.selectedRows;

}

function alreadySelected(rowId, selectedRows,IdKey) {
    return !!selectedRows.find(row=>String(row[IdKey])===String(rowId));
}
