import RLChildRow from "./renderless/RLChildRow";
import {h} from "vue";
import omit from "../helpers/omit"

export default {
    name: 'VtChildRow',
    props: ['row', 'index'],
    components: {RLChildRow},
    render() {
        return h(RLChildRow, {
            row: this.row,
            index: this.index
        },{
               default: function (props) {
                    return props.override ? h(props.override,
                        {
                            props: omit(props)
                        }) : <tr class={'VueTables__child-row ' + props.class}>
                        <td colspan={props.colspan}>
                            {props.childRow}
                        </td>
                    </tr>
                }
        })
    }
}
