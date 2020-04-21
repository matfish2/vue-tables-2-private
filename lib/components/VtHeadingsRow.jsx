import RLHeadingsRow from "./renderless/RLHeadingsRow";
import VtTableHeading from "./VtTableHeading";

export default {
    name: 'VtHeadingsRow',
    components: {RLHeadingsRow, VtTableHeading},
    render() {
        return <r-l-headings-row scopedSlots={
            {
                default: function (props) {

                    var headings = [];

                    if (props.selectable) {
                        var checkbox = props.selectable === 'single' ? '' : <input type="checkbox" onClick={props.toggleAll}/>
                        headings.push(<th class="VueTables__select-row VueTables__select-all">
                            {checkbox}
                        </th>)
                    }

                    if (props.childRowTogglerFirst) {
                        headings.push(<th/>);
                    }

                    props.columns.map(function (column) {
                        headings.push(
                            <vt-table-heading column={column}/>
                        );
                    });

                    if (props.childRowTogglerLast) {
                        headings.push(<th/>);
                    }

                    return <tr>
                        {headings}
                    </tr>
                }
            }
        }>
        </r-l-headings-row>
    }
}
