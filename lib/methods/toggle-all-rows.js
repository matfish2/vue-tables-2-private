module.exports = function (e) {
    let data;

    if (this.source==='client') {
        data = this.opts.selectable.selectAllMode==='page' ? this.filteredData : this.allFilteredData;
    } else {
        data = this.data;
    }

    if (e.target.checked) {
        if (this.opts.selectable.only) {
            this.selectedRows = data.filter(row=>this.opts.selectable.only(row))
        } else {
            this.selectedRows = data
        }
    } else {
        this.selectedRows = []
    }
    this.dispatch('select', this.selectedRows)
}
