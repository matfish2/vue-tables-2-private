import RLTableHeading from "./renderless/RLTableHeading";
import VtSortControl from "./VtSortControl";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTableHeading',
    props: ['column'],
    components: {RLTableHeading, VtSortControl},
    render() {
        return h(RLTableHeading, {column: this.column}, {
            default: function (props) {
                return props.override ? h(props.override, {props: omit(props)}) : <th
                    onKeypress={props.thEvents.keypress}
                    onClick={props.thEvents.click}
                    class={props.thAttrs.class}
                    title={props.thAttrs.title}
                    tabindex={props.thAttrs.tabIndex}
                    style={props.thAttrs.style}
                >
            <span
                class="VueTables__heading"
                title={props.title}
            >
              {props.heading}
            </span>
                    {h(VtSortControl)}
                </th>
            }
        })
    }
}
