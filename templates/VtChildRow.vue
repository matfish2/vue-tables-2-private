<template>
    <tr :class="`VueTables__child-row ${props.class}`">
        <td :colspan="props.colspan">
            <vnodes :vnodes="props.childRow"/>
        </td>
    </tr>
</template>

<script>
    import {h} from "vue"

    export default {
        name: "MyChildRow",
        props:['props'],
        components:{
          vnodes: {
              functional: true,
              render: (ctx) => h(ctx.$attrs.vnodes)
          }
        }
    }
</script>
