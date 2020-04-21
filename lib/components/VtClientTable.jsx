import VtPerPageSelector from './VtPerPageSelector'
import VtTable from './VtTable'
import VtPagination from "./VtPagination";
import VtDropdownPagination from "./VtDropdownPagination";
import VtGenericFilter from "./VtGenericFilter";
import VtColumnsDropdown from "./VtColumnsDropdown";
import Observer from "./Observer";
import VtPaginationCount from "./VtPaginationCount";

export default {
    name: 'VtClientTable',
    components: {
        VtPerPageSelector,
        VtTable,
        VtPagination,
        VtDropdownPagination,
        VtColumnsDropdown,
        VtGenericFilter,
        VtPaginationCount,
        Observer
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        options: {
            type: Object,
            required: false,
            default: function () {
                return {};
            }
        }
    },
    methods: {
        setFilter(val) {
            this.$refs.table.setFilter(val)
        },
        setPage(val) {
            this.$refs.table.setPage(val)
        },
        setOrder(column, asc) {
            this.$refs.table.setOrder(column, asc)
        },
        toggleChildRow(rowId) {
            this.$refs.table.toggleChildRow(rowId)
        },
        getOpenChildRows(rows = null) {
            return this.$refs.table.getOpenChildRows(rows)
        },
        resetQuery() {
            this.$refs.table.resetQuery()
        }
    },
    computed: {
        filteredData() {
            return this.$refs.table.filteredData;
        },
        allFilteredData() {
            return this.$refs.table.allFilteredData
        },
        selectedRows() {
            return this.$refs.table.selectedRows
        }
    },
    provide() {
        return {
            scopedSlots: () => this.$scopedSlots,
            slots: () => this.$slots
        }
    },
    model: {
        prop: "data"
    },
    render(h) {
        return <r-l-client-table data={this.data} columns={this.columns} name={this.name} options={this.options} ref="table" scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <div class={"VueTables VueTables--" + props.source}>

                        <div class={props.theme.row}>
                            <div class={props.theme.column}>
                                {!props.opts.filterByColumn && props.opts.filterable ?
                                    <div class={`${props.theme.field} ${props.theme.inline} ${props.theme.left} VueTables__search`}>
                                        {props.slots.beforeFilter}
                                        <vt-generic-filter/>
                                        {props.slots.afterFilter}
                                    </div> : ''}
                                {props.slots.afterFilterWrapper}

                                {props.perPageValues.length > 1 && !props.opts.pagination.virtual ? <div class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__limit`}>
                                    {props.slots.beforeLimit}
                                    <vt-per-page-selector/>
                                    {props.slots.afterLimit}
                                </div> : ''}

                                {props.opts.pagination.dropdown && props.totalPages > 1 ?
                                    <div class="VueTables__pagination-wrapper">
                                        <div class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`}>
                                            <vt-dropdown-pagination/>
                                        </div>
                                    </div> : ''}

                                {props.opts.columnsDropdown ? <div class={`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`}>
                                    <vt-columns-dropdown/>
                                </div> : ''}
                            </div>
                        </div>

                        {props.slots.beforeTable}
                        <div class="table-responsive VueTables__wrapper" style={props.virtualPagination ? 'overflow-x:unset; overflow-y:scroll;':''}>
                            <vt-table ref="vt_table"/>
                            {props.opts.pagination.virtual ? <observer onIntersect={()=>props.setPage(props.page+1)}/> : ''}
                        </div>
                        {props.slots.afterTable}

                        {props.opts.pagination.virtual ? '' : <vt-pagination/> }
                        {props.opts.pagination.virtual || props.opts.pagination.dropdown ? <vt-pagination-count/> : ''}
                    </div>
                }
            }
        }
        >

        </r-l-client-table>
    }
}