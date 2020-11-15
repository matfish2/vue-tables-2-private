import RLColumnsDropdown from "./renderless/RLColumnsDropdown";
import dropdownWrapper from "./dropdown-wrapper"
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtColumnsDropdown',
    components: {RLColumnsDropdown},
    render() {
        return h(RLColumnsDropdown, {}, {
            default: function (props) {

                if (props.override) {
                    return h(props.override, {
                        props: omit(props)
                    })
                }

                var content;
                var cols = props.origColumns.map(column => {
                    content = <a class={props.theme.dropdown.item}
                                 href="#"
                                 onClick={() => props.toggleColumn(column)}>
                        <input type="checkbox" value={column}
                               disabled={props.onlyColumn(column)}
                               checked={props.columns.includes(column)}/>
                        {props.getHeading(column)}
                    </a>;

                    return props.theme.framework === 'bulma' ? content : <li>
                        {content}
                    </li>
                });

                return <div class="VueTables__columns-dropdown">
                    <button type="button" class={`${props.theme.button} ${props.theme.dropdown.trigger}`}
                            onClick={props.toggleColumnsDropdown}>
                        {props.display('columns')}
                        <span class={`${props.theme.icon} ${props.theme.small}`}>
                                    <i class={props.theme.dropdown.caret}></i>
                                 </span>
                    </button>

                    {dropdownWrapper(h, props.theme.dropdown, cols, props.displayColumnsDropdown)}

                </div>

            }

        })
    }
}
