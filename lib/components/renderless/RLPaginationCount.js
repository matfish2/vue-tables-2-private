export default {
    inject:['page','limit','allFilteredData'],
    render() {
        return this.$scopedSlots.default({
            from: (this.page()-1) * this.limit() + 1,
            to: this.page() * this.limit() > this.allFilteredData().length ? this.allFilteredData().length : this.page() * this.limit(),
            total: this.allFilteredData().length,
        })
    }
}