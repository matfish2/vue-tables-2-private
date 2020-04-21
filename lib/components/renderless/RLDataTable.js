module.exports = function () {
    return this.$scopedSlots.default({
        source: this.source,
        theme: this.theme,
        opts: this.opts,
        perPageValues: this.perPageValues,
        totalPages: this.totalPages,
        slots: this.$parent.$slots,
        page: this.page,
        setPage: this.setPage,
        virtualPagination: this.opts.pagination.virtual,
        override: this.componentsOverride.dataTable
    })
}
