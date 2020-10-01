<template>
    <tr class="VueTables__no-results">
        <td :class="`text-center ${props.tdClass}`" :tabindex="props.tabIndex"
            :colspan="props.colspan">
            {{props.message}}
        </td>
    </tr>
</template>

<script>
    export default {
        name: "MyNoResultsRow",
        props: ['props']
    }
</script>
