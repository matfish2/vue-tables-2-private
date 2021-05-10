import RLTableHead from "./renderless/RLTableHead";
import VtHeadingsRow from "./VtHeadingsRow"
import VtFiltersRow from "./VtFiltersRow";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTableHead',
    components: {RLTableHead, VtHeadingsRow, VtFiltersRow},
    render() {
        return h(RLTableHead, {}, {
            default: function (props) {
                return props.override ? h(props.override, {props:omit(props)}) : <thead class={props.class}>
                {props.slots.prependHead ? props.slots.prependHead() : ''}
                {h(VtHeadingsRow)}
                {props.slots.beforeFilters ? props.slots.beforeFilters() : ''}
                {props.opts.filterByColumn && props.opts.filterable ? h(VtFiltersRow) : ''}
                {props.slots.afterFilters ? props.slots.afterFilters() : ''}
                </thead>
            }
        })
    }
}
