export default {
    name: 'RLNoResultsRow',
    inject:['colspan','display', 'componentsOverride','tabIndex','loading','loadingError'],
    render() {
        return this.$scopedSlots.default({
            colspan: this.colspan(),
            loading: this.loading(),
            loadingError: this.loadingError(),
            display: this.display,
            tabIndex: this.tabIndex(),
            class: this.getClass(),
            message: this.display(this.getMessage()),
            override: this.componentsOverride.noResultsRow
        })
    },
    methods:{
        getClass() {
            if (this.loadingError()) {
                return 'VueTables__error'
            }

            if (this.loading()) {
                return 'VueTables__loading'
            }

            return 'VueTables__no-results'
        },
        getMessage() {
            if (this.loadingError()) {
                return 'loadingError'
            }

            if (this.loading()) {
                return 'loading'
            }

            return 'noResults'
        }
    }
}
