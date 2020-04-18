module.exports = function() {
    let span = this.allColumns.length;
    if (this.hasChildRow) span++;
    if (this.opts.selectable.type) span++;

    return span;
}
