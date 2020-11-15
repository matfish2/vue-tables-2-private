import RLTableBody from "./renderless/RLTableBody";
import VtNoResultsRow from "./VtNoResultsRow";
import VtTableRow from "./VtTableRow";
import VtGroupRow from "./VtGroupRow";
import VtChildRow from "./VtChildRow"
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtTableBody',
    components: {RLTableBody, VtNoResultsRow, VtTableRow, VtChildRow, VtGroupRow},
    render() {
        return h(RLTableBody, {}, {
            default: function (props) {
                var rows = [];
                var currentGroup;

                props.data.forEach((row, index) => {
                    if (props.groupBy && props.source === 'client' && row[props.groupBy] !== currentGroup) {
                        rows.push(h(VtGroupRow, {row}))
                        currentGroup = row[props.groupBy]
                    }

                    if (props.canToggleGroups && props.collapsedGroups.includes(currentGroup)) {
                        return;
                    }
                    rows.push(h(VtTableRow, {row, index: props.initialIndex + index + 1}))
                    if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                        rows.push(
                            h(VtChildRow, {
                              row, index:props.initialIndex + index + 1
                            })
                            )
                    }
                });

                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <tbody>
                {props.slots.prependBody}
                {props.data.length === 0 ? h(VtNoResultsRow) : ''}
                {rows}
                {props.slots.appendBody}
                </tbody>
            }
        })
    }
}
