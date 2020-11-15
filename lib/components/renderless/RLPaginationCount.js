export default {
    inject:['page','limit','opts','allFilteredData','source','tableData','count'],
    render() {
        return this.$slots.default({
            from: this.opts().pagination.virtual ? 1 : (this.page()-1) * this.limit() + 1,
            to: this.getTo(),
            total: this.source==='client' ? this.allFilteredData().length : this.count(),
        })
    },
    methods:{
        getTo() {
            if (this.source==='client') {
                return this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit();
            }

            return this.tableData().length;
        }
    }
}
