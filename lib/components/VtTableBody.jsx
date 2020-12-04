import RLTableBody from "./renderless/RLTableBody";
import VtNoResultsRow from "./VtNoResultsRow";
import VtTableRow from "./VtTableRow";
import VtGroupRow from "./VtGroupRow";
import VtChildRow from "./VtChildRow"

export default {
    name: 'VtTableBody',
    components: {RLTableBody, VtNoResultsRow, VtTableRow, VtChildRow, VtGroupRow},
    render() {
        return <r-l-table-body scopedSlots={
            {
                default: function (props) {
                    var rows = [];

                    if (props.groupBy) {

                        function addRows(data, rows = [], level = 1) {
                            data.forEach(group => {
                                rows.push(<vt-group-row level={level} type={group.type} value={group.value}/>)
                                if (level === props.groupBy.length) {
                                    if (!props.canToggleGroups || !props.collapsedGroups.includes(group.value)) {
                                        group.data.forEach((row, index) => {
                                            rows.push(<vt-table-row row={row} index={props.initialIndex + index + 1}/>)
                                            if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                                                rows.push(<vt-child-row row={row}
                                                                        index={props.initialIndex + index + 1}/>)
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
                            rows.push(<vt-table-row row={row} index={props.initialIndex + index + 1}/>)
                            if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
                                rows.push(<vt-child-row row={row} index={props.initialIndex + index + 1}/>)
                            }
                        })
                    }


                    return props.override ? h(props.override, {
                        attrs: {props}
                    }) : <tbody class={props.theme.tbody}>
                    {props.slots.prependBody}
                    {props.data.length === 0 ? <vt-no-results-row/> : ''}
                    {rows}
                    {props.slots.appendBody}
                    </tbody>
                }
            }
        }
            >
            </r-l-table-body>
        }
}
