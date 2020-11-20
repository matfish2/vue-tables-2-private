<template>

    <div :class="`VueTables VueTables--${props.source}`" slot-scope="props">

        <div :class="props.theme.row">
            <div :class="props.theme.column">
                <div v-if="!props.opts.filterByColumn && props.opts.filterable"
                     :class="`${props.theme.field} ${props.theme.inline} ${props.theme.left} VueTables__search`">
                    <vnodes :vnodes="props.slots.beforeFilter"/>
                    <vt-generic-filter ref="genericFilter"/>
                    <vnodes :vnodes="props.slots.afterFilter"/>
                </div>
                <vnodes :vnodes="props.slots.afterFilterWrapper"/>

                <div v-if="(props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual"
                     :class="`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__limit`">
                    <vnodes :vnodes="props.slots.beforeLimit"/>
                    <vt-per-page-selector/>
                    <vnodes :vnodes="props.slots.afterLimit"/>

                </div>

                <div class="VueTables__pagination-wrapper" v-if="props.opts.pagination.dropdown && props.totalPages > 1">
                    <div :class="`${props.theme.field} ${props.theme.inline} ${props.theme.right} VueTables__dropdown-pagination`">
                        <vt-dropdown-pagination/>
                    </div>
                </div>

                <div v-if="props.opts.columnsDropdown"
                     :class="`VueTables__columns-dropdown-wrapper ${props.theme.right} ${props.theme.dropdown.container}`">
                    <vt-columns-dropdown/>
                </div>
            </div>
        </div>

        <vnodes :vnodes="props.slots.beforeTable"/>
        <div class="table-responsive">
            <vt-table ref="vt_table"/>
            <observer v-if="props.opts.pagination.virtual && !props.loading" @intersect="props.setPage(props.page + 1)"/>
        </div>
        <vnodes :vnodes="props.slots.afterTable"/>

        <vt-pagination v-if="!props.opts.pagination.virtual && props.opts.pagination.show"/>
        <vt-pagination-count v-if="props.opts.pagination.virtual || props.opts.pagination.dropdown"/>

    </div>
</template>

<script>
    import VtColumnsDropdown from 'v-tables-3/compiled/components/VtColumnsDropdown'
    import VtDropdownPagination from 'v-tables-3/compiled/components/VtDropdownPagination'
    import VtGenericFilter from 'v-tables-3/compiled/components/VtGenericFilter'
    import VtPerPageSelector from 'v-tables-3/compiled/components/VtPerPageSelector'
    import VtPagination from 'v-tables-3/compiled/components/VtPagination'
    import VtPaginationCount from 'v-tables-3/compiled/components/VtPaginationCount'
    import VtTable from 'v-tables-3/compiled/components/VtTable'
    import Observer from 'v-tables-3/compiled/components/Observer'
    import {h} from "vue"

    export default {
        name: "MyDataTable",
        props: ['props'],
        components: {
            VtGenericFilter,
            VtPerPageSelector,
            VtColumnsDropdown,
            VtDropdownPagination,
            VtTable,
            VtPagination,
            VtPaginationCount,
            Observer,
            vnodes: {
                functional: true,
                render: (ctx) => h(ctx.$attrs.vnodes)
            }
        }
    }
</script>
