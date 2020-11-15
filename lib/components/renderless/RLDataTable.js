module.exports = function () {
    return this.$slots.default({
        source: this.source,
        theme: this.theme,
        opts: this.opts,
        perPageValues: this.perPageValues,
        totalPages: this.totalPages,
        slots: this.$parent.$slots,
        override: this.componentsOverride.dataTable
    })
}
