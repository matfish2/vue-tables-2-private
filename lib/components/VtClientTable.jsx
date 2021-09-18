import VtPerPageSelector from './VtPerPageSelector'
import VtTable from './VtTable'
import VtPagination from "./VtPagination";
import VtDropdownPagination from "./VtDropdownPagination";
import VtGenericFilter from "./VtGenericFilter";
import VtColumnsDropdown from "./VtColumnsDropdown";
import VtPaginationCount from "./VtPaginationCount"
import Observer from "./Observer";
import {h, ref} from 'vue'
import emittedEvents from '../helpers/emitted-events'

import omit from "../helpers/omit"

export default function (RLClientTable) {
    return {
        name: 'VtClientTable',
        emits: emittedEvents.concat(['update','input']),
        components: {
            VtPerPageSelector,
            VtTable,
            VtPagination,
            VtDropdownPagination,
            VtColumnsDropdown,
            VtGenericFilter,
            RLClientTable,
            VtPaginationCount
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
            setLoadingState(isLoading) {
                this.$refs.table.loading = isLoading
            },
            setFilter(val) {
                this.$refs.table.setFilter(val);
            },
            setPage(val) {
                this.$refs.table.setPage(val);
            },
            setOrder(column, asc) {
                this.$refs.table.setOrder(column, asc);
            },
            setLimit(limit) {
                this.$refs.table.setLimit(limit);
            },
            toggleChildRow(rowId) {
                this.$refs.table.toggleChildRow(rowId);
            },
            getOpenChildRows(rows = null) {
                return this.$refs.table.getOpenChildRows(rows);
            },
            resetQuery() {
                this.$refs.table.resetQuery()
            },
            setCustomFilters(params, sendRequest = false) {
                return this.$refs.table.setCustomFilters(params, sendRequest)
            },
            downloadCsv(filename = 'table.csv') {
                return this.$refs.table.downloadCsv(filename)
            }
        },
        computed: {
            filteredData() {
                return this.$refs.table.filteredData;
            },
            allFilteredData() {
                return this.$refs.table.allFilteredData
            },
            filtersCount() {
                return this.$refs.table.filtersCount
            }
        },
        provide() {
            return {
                slots: () => this.$slots
            }
        },
        model: {
            prop: "data"
        },
        setup() {
            const tablewrapper = ref(null);

            return {
                tablewrapper
            }
        },
        render() {
            return h(RLClientTable, {
                data: this.data,
                columns: this.columns,
                name: this.name,
                options: this.options,
                ref: 'table'
            }, {
                default: function (props) {
                    return props.override ? h(props.override, {
                        props: omit(props, 'override')
                    }) : <div class={"VueTables VueTables--" + props.source}>

                        <div class={props.theme.row}>
                            <div class={props.theme.column}>
                                {!props.opts.filterByColumn && props.opts.filterable ?
                                    <div
                                        class={`${props.theme.field} ${props.theme.inline} ${props.theme.left} VueTables__search`}>
                                        {props.slots.beforeFilter ? props.slots.beforeFilter() : ''}
                                        {h(VtGenericFilter)}
                                        {props.slots.afterFilter ? props.slots.afterFilter : ''}
                                    </div> : ''}
                                {props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : ''}

                                {(props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ?
                                    <div
                                        class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__limit`}>
                                        {props.slots.beforeLimit ? props.slots.beforeLimit() : ''}
                                        {h(VtPerPageSelector)}
                                        {props.slots.afterLimit ? props.slots.afterLimit : ''}
                                    </div> : ''}

                                {props.opts.pagination.dropdown && props.totalPages > 1 ?
                                    <div class="VueTables__pagination-wrapper">
                                        <div
                                            class={`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`}>
                                            {h(VtDropdownPagination)}
                                        </div>
                                    </div> : ''}

                                {props.opts.columnsDropdown ? <div
                                    class={`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`}>
                                    {h(VtColumnsDropdown)}
                                </div> : ''}
                            </div>
                        </div>

                        {props.slots.beforeTable ? props.slots.beforeTable() : ''}
                        <div class="table-responsive VueTables__wrapper" ref="tablewrapper">
                            {h(VtTable)}
                            {props.opts.pagination.virtual ? h(Observer, {
                                onIntersect: () => {
                                    props.setPage(props.page + 1)
                                }
                            }) : ''}
                        </div>
                        {props.slots.afterTable ? props.slots.afterTable() : ''}

                        {props.opts.pagination.virtual || !props.opts.pagination.show ? '' : h(VtPagination)}
                        {props.opts.pagination.virtual || props.opts.pagination.dropdown ? h(VtPaginationCount) : ''}
                    </div>

                }
            })
        }
    }
}
