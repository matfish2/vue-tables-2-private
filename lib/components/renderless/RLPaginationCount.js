export default {
    inject:['page','limit','opts','allFilteredData'],
    render() {
        return this.$scopedSlots.default({
            from: this.opts().pagination.virtual ? 1 : (this.page()-1) * this.limit() + 1,
            to: this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit(),
            total: this.allFilteredData().length,
        })
    }
}