import RLTableRow from "./renderless/RLTableRow";
import VtTableCell from "./VtTableCell";
import VtChildRowToggler from "./VtChildRowToggler";
import VtRowSelector from "./VtRowSelector";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTableRow',
    props: ['row', 'index'],
    components: {RLTableRow, VtTableCell, VtChildRowToggler, VtRowSelector},
    render() {
        return h(RLTableRow, {
            row: this.row,
            index: this.index
        }, {
            default: function (props) {
                return props.override ? h(props.override, {props: omit(props)}) :
                    <tr class={`VueTables__row ` + props.rowAttrs.class} {...props.rowAttrs.attrs}
                        onClick={props.rowEvents.click}
                        onDblclick={props.rowEvents.click}>
                        {props.selectable ? h(VtRowSelector) : ''}
                        {props.childRowTogglerFirst ? h(VtChildRowToggler, {rowId: props.rowId}) : ''}
                        {props.columns.map(column => h(VtTableCell, {column}))}
                        {props.childRowTogglerLast ? h(VtChildRowToggler, {rowId: props.rowId}) : ''}
                    </tr>
            }
        })
    }
}
