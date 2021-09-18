import RLGroupRow from "./renderless/RLGroupRow";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtGroupRow',
    components: {RLGroupRow},
    props: ['level', 'value'],
    render() {
        return h(RLGroupRow, {
            level: this.level,
            value: this.value
        }, {
            default: function (props) {
                return props.override ? h(props.override, {props: omit(props)}) :
                    <tr class={`VueTables__group-row VueTables__group-row--${props.level}`}
                        onclick={props.toggleGroupDirection}>
                        <td colspan={props.colspan}>
                            {props.canToggleGroup ? <button
                                class={props.theme.button}
                                onclick={props.toggleGroup.bind(this, props.groupValue)}>{props.groupValue}<span
                                class={`VueTables__group-toggler ${props.groupToggleIcon(props.groupValue)}`}></span>
                            </button> : ''}
                            {!props.canToggleGroup ? <span>{props.groupValue}</span> : ''}
                            {props.slot}
                        </td>
                    </tr>
            }
        })
    }
}
