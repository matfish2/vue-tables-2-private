import RLNoResultsRow from "./renderless/RLNoResultsRow";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtNoResultsRow',
    components: {RLNoResultsRow},
    render() {
        return h(RLNoResultsRow, {}, {
                default: function (props) {
                    return props.override ? h(props.override, {props:omit(props)}) : <tr class={props.class}>
                        <td class={`text-center ${props.tdClass}`} tabindex={props.tabIndex}
                            colspan={props.colspan}>
                            {props.message}
                        </td>
                    </tr>
                }
        })
    }
}
