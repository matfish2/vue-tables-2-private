import RLTableCell from "./renderless/RLTableCell";
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtTableCell',
    props: ['column'],
    components: { RLTableCell },
    render() {
        return h(RLTableCell, {
            column: this.column
        }, {
                default: (props) => {
                    return props.override ? h(props.override, {props:omit(props)}) : <td tabindex={props.tabIndex} class={props.classes}>
                        {props.content}
                    </td>
                }
        })
    }
}
