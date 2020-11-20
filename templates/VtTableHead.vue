<template>
    <thead>
    <vnodes :vnodes="props.slots.prependHead"/>
    <vt-headings-row/>
    <vnodes :vnodes="props.slots.beforeFilters"/>
    <vt-filters-row v-if="props.opts.filterByColumn && props.opts.filterable"/>
    <vnodes :vnodes="props.slots.afterFilters"/>
    </thead>
</template>

<script>
    import VtHeadingsRow from "v-tables-3/compiled/components/VtHeadingsRow";
    import VtFiltersRow from "v-tables-3/compiled/components/VtFiltersRow";
    import {h} from "vue"
    export default {
        name: "MyTableHead",
        props:['props'],
        components:{
            VtHeadingsRow,
            VtFiltersRow,
            vnodes: {
                functional: true,
                render: (ctx) => ctx.$attrs.vnodes
            }
        }
    }
</script>
