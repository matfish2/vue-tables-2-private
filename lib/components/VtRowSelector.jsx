import RLRowSelector from "./renderless/RLRowSelector";

export default {
    name: 'VtRowSelector',
    components: {RLRowSelector},
    render() {
        return <r-l-row-selector scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) :
                        <td class={`VueTables__select-row VueTables__select-single ${props.tdClass}`}
                            onClick={(e) => props.toggleRow(e, props.row, props.index, props.disabled)}>
                            <input type={props.type}
                                   name="selected_row[]"
                                   class="vt-select-row"
                                   disabled={props.disabled}
                                   checked={props.selected}
                                   />
                        </td>
                }
            }
        }
        >
        </r-l-row-selector>
    }
}
