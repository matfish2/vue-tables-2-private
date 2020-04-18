import RLRowSelector from "./renderless/RLRowSelector";

export default {
    name: 'VtRowSelector',
    components: {RLRowSelector},
    props: ['row'],
    render() {
        return <r-l-row-selector row={this.row} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) :
                        <td><input type="checkbox"
                               checked={props.isRowSelected(props.row)}
                               onChange={() => props.selectRow(props.row)}/></td>
                }
            }
        }
        >
        </r-l-row-selector>
    }
}
