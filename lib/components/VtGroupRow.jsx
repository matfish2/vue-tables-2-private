import RLGroupRow from "./renderless/RLGroupRow";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtGroupRow',
    components: {RLGroupRow},
    props: ['row'],
    render() {
        return h(RLGroupRow, {
            row: this.row
        }, {
            default: function (props) {
                return props.override ? h(props.override, {props: omit(props)}) :
                    <tr class={props.theme.groupTr} on-click={props.toggleGroupDirection}>
                        <td colspan={props.colspan}>
                            {props.canToggleGroup ? <button
                                class={props.theme.button}
                                on-click={props.toggleGroup.bind(this, props.groupValue)}>{props.groupValue}<span
                                class={props.groupToggleIcon(props.groupValue)}></span></button> : ''}
                            {!props.canToggleGroup ? <span>{props.groupValue}</span> : ''}
                            {props.slot}
                        </td>
                    </tr>
            }
        })
    }
}
