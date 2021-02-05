import RLTable from "./renderless/RLTable";
import VtTableHead from "./VtTableHead";
import VtTableBody from "./VtTableBody";
import {h, ref} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtTable',
    inject: ['setRef'],
    components: {RLTable, VtTableHead, VtTableBody},
    setup() {
        const table = ref(null);

        return {
            table,
        };
    },
    mounted() {
        this.setRef('table', this.$refs.table)
    },
    render() {
        return h(RLTable, {}, {
            default: function (props) {

                var caption = props.caption ? <caption>{props.caption}</caption> : '';

                return props.override ? h(props.override, {props: omit(props)}) :
                    <table
                        ref="table"
                        class={props.tableAttrs.class}
                        summary={props.tableAttrs.summary}
                    >
                        {caption}
                        {h(VtTableHead)}
                        {props.slots.beforeBody ? props.slots.beforeBody() : ''}
                        {h(VtTableBody)}
                        {props.slots.afterBody ? props.slots.afterBody() : ''}
                    </table>
            }
        })
    }
}
