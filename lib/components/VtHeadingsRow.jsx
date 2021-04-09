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

                     if (props.selectable) {
                        var checkbox = props.opts.selectable.mode === 'single' ? '' : <input id="vt-toggle-all" type="checkbox" onClick={e=>props.toggleAll(e)}/>
                        headings.push(<th class={`VueTables__select-row VueTables__select-all ${props.theme.th}`} style={props.thStyle}
                        >
                            {checkbox}
                        </th>)
                    }

                    if (props.childRowTogglerFirst) {
                        headings.push(<th style={props.thStyle}/>);
                    }

                    props.columns.map(function (column) {
                        headings.push(
                            h(VtTableHeading, {column})
                        )
                    });

                    if (props.childRowTogglerLast) {
                        headings.push(<th style={props.thStyle}/>);
                    }

                    return <tr>
                        {headings}
                    </tr>
                }

        })
    }
}
