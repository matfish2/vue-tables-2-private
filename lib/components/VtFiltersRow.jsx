import RLFiltersRow from "./renderless/RLFiltersRow";
import VtTextFilter from "./VtTextFilter";
import VtListFilter from "./VtListFilter";
import VtDateFilter from "./VtDateFilter";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtFiltersRow',
    components: {RLFiltersRow, VtTextFilter, VtListFilter, VtDateFilter},
    render() {
        return h(RLFiltersRow, {}, {
            default: function (props) {

                var filters = [];

                if (props.opts.selectable.mode) {
                    filters.push(<th class="VueTables__select-row"></th>)
                }

                if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler)
                    filters.push(<th></th>);

                props.columns.map(column => {

                    var filter = '';

                    if (props.filterable(column)) {
                        filter = h(props.filterType(column), {
                            column
                        })
                    }

                    if (typeof props.slots[`filter__${column}`] !== 'undefined') {
                        filter = filter ?
                            <div>{filter}{props.slots[`filter__${column}`]()}</div> : props.slots[`filter__${column}`]();
                    }

                    filters.push(<th class={props.columnClass(column)}>
                        {!!filter ? <div class="VueTables__column-filter"
                                         class={'VueTables__' + column + '-filter-wrapper'}>
                            {filter}
                        </div> : ''}
                    </th>);

                });

                if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler)
                    filters.push(<th></th>);

                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <tr class="VueTables__filters-row">
                    {filters}
                </tr>
            }
        })
    }
}
