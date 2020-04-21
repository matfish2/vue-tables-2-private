module.exports = function (e) {
    if (e.target.checked) {
        if (this.opts.selectable.only) {
            this.selectedRows = this.data.filter(row=>this.opts.selectable.only(row))
        } else {
            this.selectedRows = this.data
        }
    } else {
        this.selectedRows = []
    }
    this.dispatch('select', this.selectedRows)
}