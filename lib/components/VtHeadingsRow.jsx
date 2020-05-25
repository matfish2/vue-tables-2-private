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
                        var checkbox = props.selectable === 'single' ? '' : <input type="checkbox" onClick={e=>props.toggleAll(e)}/>
                        headings.push(<th class={`VueTables__select-row VueTables__select-all ${props.theme.th}`}>
                            {checkbox}
                        </th>)
                    }

                    if (props.childRowTogglerFirst) {
                        headings.push(<th class={props.theme.th}/>);
                    }

                    props.columns.map(function (column) {
                        headings.push(
                            <vt-table-heading column={column}/>
                        );
                    });

                    if (props.childRowTogglerLast) {
                        headings.push(<th class={props.theme.th}/>);
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
