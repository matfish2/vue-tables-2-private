<template>
    <tr :class="`VueTables__group-row VueTables__group-row--${props.level}`"
        @click="props.toggleGroupDirection">
        <td :colspan="props.colspan">
            <!-- Togglable group (toggleGroups: true)-->
            <button v-if="props.canToggleGroup"
                    :class="props.theme.button"
                    @click="props.toggleGroup.call(this, props.groupValue, $event)">{{props.groupValue}}
                <span :class="props.groupToggleIcon(props.groupValue)"></span>
            </button>
            <!--  Non-togglable group (toggleGroups: false) -->
            <span v-else>{{props.groupValue}}</span>
            <!--  Meta data slot -->
            <vnodes :vnodes="props.slot"/>
        </td>
    </tr>
</template>

<script>
    import {h} from "vue"

    export default {
        name: "MyGroupRow",
        props: ['props'],
        components:{
             vnodes: {
                functional: true,
                render: (ctx) => h(ctx.$attrs.vnodes)
            },
        }
    }
</script>
