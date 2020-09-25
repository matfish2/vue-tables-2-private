<template>
    <td :class="`VueTables__select-row VueTables__select-single ${props.tdClass}`"
        @click="props.toggleRow($event, props.row, props.index, props.disabled)">
        <input :type="props.type"
               name="selected_row[]"
               class="vt-select-row"
               :disabled="props.disabled"
               :checked="props.selected"
        />
    </td>
</template>

<script>
    export default {
        name: "MyVtRowSelector",
        props: ['props']
    }
</script>

<style scoped>

</style>
