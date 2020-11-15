import RLPagination from "./renderless/RLPagination";
import Pagination from "v-pagination-3";
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtPagination',
    components: {RLPagination, Pagination},
    render() {
        return h(RLPagination, {}, {
            default: function (props) {
                return props.override ? h(
                    props.override,
                    {
                        props:omit(props)
                    }) : h(Pagination, {
                    options: props.optionsObj,
                    records: props.records,
                    perPage: props.perPage,
                    modelValue: props.page,
                    "onUpdate:modelValue": (page) => props.setPage(page)
                })
            }
        })
    }
}
