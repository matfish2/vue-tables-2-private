import RLSortControl from './renderless/RLSortControl'
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtSortControl',
    components: {RLSortControl},
    render() {
        return h(RLSortControl, {}, {
            default: function (props) {
                return props.sortable ? (props.override ? h(props.override, {
                    props: omit(props)
                }) : <span class={props.class}></span>) : ''
            }
        })
    }
}
