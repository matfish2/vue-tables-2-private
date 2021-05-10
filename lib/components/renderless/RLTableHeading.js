var getThStyle = require('../../mixins/get-th-style')

export default {
    name: 'RLTableHeading',
    props: ['column'],
    provide() {
        return {
            column: () => this.column
        }
    },
    inject: ['opts', 'theme', 'sortableClass', 'getHeadingTooltip', 'getHeading', 'orderByColumn', 'componentsOverride', 'tabIndex'],
    mixins:[getThStyle],
    render(h) {
        return this.$slots.default({
            opts: this.opts(),
            thAttrs: {
                class: this.getClasses(),
                tabIndex: this.tabIndex(),
                style: this.getThStyle(),
                title: this.getHeadingTooltip(this.column)
            },
            thEvents: {
                keypress: (e) => {
                    if (e.key === "Enter") {
                        this.orderByColumn(this.column, e);
                    }
                },
                click: (e) => {
                    if (e.target.className !== "resize-handle") {
                        this.orderByColumn(this.column, e);
                    }
                }
            },
            spanAttrs: {
                title: this.getHeadingTooltip(this.column)
            },
            heading: this.getHeading(this.column, h),
            override: this.componentsOverride.tableHeading
        })
    },
    methods:{
        getClasses() {
            var cls = this.sortableClass(this.column);
            if (this.theme.th) {
                cls+= ' ' + this.theme.th
            }

            return cls;
        }
    }
}
