<template>
    <th slot-scope="props"
        v-on="props.thEvents"
        v-bind="props.thAttrs"
    >
        <span class="VueTables__heading" :title="props.title">
            <vnodes :vnodes="props.heading"/>
        </span>
        <vt-sort-control/>
    </th>
</template>

<script>
    import VtSortControl from "v-tables-3/compiled/components/VtSortControl";
    import {h} from "vue"

    export default {
        name: "VtTableHeading",
        components: {
            VtSortControl,
            vnodes: {
                functional: true,
                render: (ctx) => typeof ctx.$attrs.vnodes === 'object' ? h(ctx.$attrs.vnodes) : [h(ctx.$attrs.vnodes)]
            }
        },
        props: ['props']
    }
</script>
