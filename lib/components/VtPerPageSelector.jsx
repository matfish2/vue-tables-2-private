import RLPerPageSelector from "./renderless/RLPerPageSelector";
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtPerPageSelector',
    components: {RLPerPageSelector},
    render() {
        return h(RLPerPageSelector, {}, {
                default: function (props) {
                    return props.override ? h(props.override, {props: omit(props)}) : <div class="VueTables__limit-field">
                            <label class={props.labelClass} for={`VueTables__limit_${props.id}`}>
                                {props.display('limit')}
                            </label>
                            <select id={props.selectAttrs.id} class={props.selectAttrs.class} onChange={props.selectEvents.change}
                            >
                                {props.perPageValues.map(val => {
                                    return <option value={val} selected={val===props.selectAttrs.value}>{val}</option>
                                })}
                            </select>
                    </div>
                }
        })
    }
}
