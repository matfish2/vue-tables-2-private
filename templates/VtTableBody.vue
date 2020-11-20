<template>
    <tbody>
    <vnodes :vnodes="props.slots.prependBody"/>
    <vt-no-results-row v-if="props.data.length === 0"/>
    <table-rows v-for="(row,index) in props.data"
                :row="row"
                :index="props.initialIndex + index + 1"
                :renderChildRow="props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])"
                :key="index"
    />
    <vnodes :vnodes="props.slots.appendBody"/>
    </tbody>
</template>

<script>
    import VtNoResultsRow from 'v-tables-3/compiled/components/VtNoResultsRow'
    import VtTableRow from 'v-tables-3/compiled/components/VtTableRow'
    import VtChildRow from 'v-tables-3/compiled/components/VtChildRow'
    import {h} from "vue"

    export default {
        name: "MyTableBody",
        props: ['props'],
        components: {
            VtNoResultsRow,
            vnodes: {
                functional: true,
                render: (ctx) => h(ctx.$attrs.vnodes)
            },
            TableRows: {
                functional: true,
                render(ctx) {
                    var props = ctx.$attrs;

                    // TODO: add group row

                    var data = [
                        h(VtTableRow, {
                            props
                        })
                    ];

                    if (props.renderChildRow) {
                        data.push(h(VtChildRow, {
                            props
                        }))
                    }

                    return data
                }
            }
        }
    }
</script>
