import RLRowSelector from "./renderless/RLRowSelector";

export default {
    name: 'VtRowSelector',
    components: {RLRowSelector},
    render() {
        return <r-l-row-selector scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) :
                        <td class="VueTables__select-row VueTables__select-single">
                            <input type="checkbox"
                                   disabled={props.disabled}
                                   checked={props.selected}
                                   onClick={(e) => props.toggleRow(e, props.row, props.index)}/>
                        </td>
                }
            }
        }
        >
        </r-l-row-selector>
    }
}
