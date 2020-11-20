<template>
    <tr class="VueTables__filters-row">
        <th v-if="props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler"></th>
        <th v-for="column in props.columns" :class="props.columnClass(column)">
            <component v-if="props.filterable(column)" :is="props.filterType(column)" :column="column"/>
            <vnodes :vnodes="props.slots[`filter__${column}`]"/>
        </th>
        <th v-if="props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler"></th>
    </tr>
</template>

<script>
    import VtDateFilter from 'v-tables-3/compiled/components/VtDateFilter'
    import VtListFilter from 'v-tables-3/compiled/components/VtListFilter'
    import VtTextFilter from 'v-tables-3/compiled/components/VtTextFilter'
    import {h} from 'vue'

    export default {
        name: "MyFiltersRow",
        props: ['props'],
        components: {
            VtDateFilter,
            VtListFilter,
            VtTextFilter,
            vnodes: {
                functional: true,
                render: (ctx) => h(ctx.$attrs.vnodes)
            }
        }
    }
</script>
