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

                if (props.groupBy && props.source === 'client') {
                    function addRows(data, rows = [], level = 1) {
                        data.forEach(group => {
                            rows.push(h(VtGroupRow, {
                                level,
                                value: group.value
                            }))

                            if (level === props.groupBy.length) {
                                if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                                    group.data.forEach((row, index) => {
                                        rows.push(h(VtTableRow, {row, index: props.initialIndex + index + 1}))
                                        if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                                            rows.push(h(VtChildRow, {
                                                row, index: props.initialIndex + index + 1
                                            }))
                                        }
                                    })
                                }
                            } else {
                                if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                                    addRows(group.data, rows, level + 1)
                                }
                            }
                        })

                        return rows
                    }
                    rows = addRows(props.data);
                } else {
                    props.data.forEach((row, index) => {
                        rows.push(h(VtTableRow, {row, index: props.initialIndex + index + 1}))
                        if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                            rows.push(
                                h(VtChildRow, {
                                    row, index: props.initialIndex + index + 1
                                })
                            )
                        }
                    });
                }

                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <tbody>
                {props.slots.prependBody ? props.slots.prependBody() : ''}
                {props.data.length === 0 ? h(VtNoResultsRow) : ''}
                {rows}
                {props.slots.appendBody ? props.slots.appendBody() : ''}
                </tbody>
            }
        })
    }
}

