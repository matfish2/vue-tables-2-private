import RLHeadingsRow from "./renderless/RLHeadingsRow";
import VtTableHeading from "./VtTableHeading";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtHeadingsRow',
    components: {RLHeadingsRow, VtTableHeading},
    render() {
        return h(RLHeadingsRow, {}, {
                default: function (props) {

                    if (props.override) {
                        return h(props.override, {
                            props: omit(props)
                        })
                    }

                    var headings = [];

                    if (props.childRowTogglerFirst) {
                        headings.push(<th/>);
                    }

                    props.columns.map(function (column) {
                        headings.push(
                            h(VtTableHeading, {column})
                        )
                    });

                    if (props.childRowTogglerLast) {
                        headings.push(<th/>);
                    }

                    return <tr>
                        {headings}
                    </tr>
                }

        })
    }
}
