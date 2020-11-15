import RLDropdownPagination from "./renderless/RLDropdownPagination";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VTDropdownPagination',
    components: {RLDropdownPagination},
    render() {
        return h(RLDropdownPagination, {}, {
            default: function (props) {
                var id = "VueTables__dropdown-pagination_" + props.name;

                var pages = [];

                for (var pag = 1; pag <= props.totalPages; pag++) {
                    pages.push(<option value={pag}>{pag}</option>)
                }

                return props.override ? h(props.override, {
                    props: omit(props),
                }) : <select class={`${props.theme.select} dropdown-pagination`}
                             name="page"
                             ref="page"
                             value={props.page}
                             on-change={e => props.setPage(e.target.value)}
                             id={id}
                >
                    {pages}
                </select>
            }
        })
    }
}
