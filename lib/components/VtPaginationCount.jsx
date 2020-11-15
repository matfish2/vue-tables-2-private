import RLPaginationCount from "./renderless/RLPaginationCount";
import {h} from "vue"

export default {
    name: 'VtPaginationCount',
    components: {RLPaginationCount},
    render() {
        return h(RLPaginationCount, {}, {
            default: function (props) {
                return <p v-show={props.total}>Showing records {props.from} to {props.to} out of {props.total}</p>
            }
        });
    }
}
