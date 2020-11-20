<template>
    <table v-bind="props.tableAttrs">
        <caption v-if="props.caption">{{props.caption}}</caption>
        <vt-table-head/>
        <vnodes :vnodes="props.slots.beforeBody"/>
        <vt-table-body ref="vt_table_body"/>
        <vnodes :vnodes="props.slots.afterBody"/>
    </table>

</template>

<script>
    import VtTableHead from 'v-tables-3/compiled/components/VtTableHead'
    import VtTableBody from 'v-tables-3/compiled/components/VtTableBody'
    import {h} from "vue"

    export default {
        name: "MyTable",
        props: ['props'],
        components: {
            VtTableHead,
            VtTableBody,
            vnodes: {
                functional: true,
                render: (ctx) => h(ctx.$attrs.vnodes)
            }
        }
    }
</script>
