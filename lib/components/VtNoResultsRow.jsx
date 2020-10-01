import RLNoResultsRow from "./renderless/RLNoResultsRow";

export default {
    name: 'VtNoResultsRow',
    components: {RLNoResultsRow},
    render() {
        return <r-l-no-results-row scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs:{props}}) : <tr class={props.class}>
                        <td class={`text-center ${props.tdClass}`} tabindex={props.tabIndex}
                            colspan={props.colspan}>
                            {props.message}
                        </td>
                    </tr>
                }
            }
        }>
        </r-l-no-results-row>
    }
}
