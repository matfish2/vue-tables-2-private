module.exports = function () {
    return this.$slots.default({
        source: this.source,
        theme: this.theme,
        opts: this.opts,
        perPageValues: this.perPageValues,
        totalPages: this.totalPages,
        slots: this.$parent.$slots,
        page: this.page,
        setPage: this.setPage,
        virtualPagination: this.opts.pagination.virtual,
        loading: this.loading,
        override: this.componentsOverride.dataTable,
        styles:() => {
            var cls = [];

            if (this.opts.pagination.virtual || this.opts.stickyHeader) {
                cls.push('overflow-x:unset');
            }

            if (this.opts.pagination.virtual) {
                cls.push('overflow-y:scroll');
            }

            return cls.join(';');
        }
    })
}
