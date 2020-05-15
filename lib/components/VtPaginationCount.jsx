import RLPaginationCount from "./renderless/RLPaginationCount";

export default {
    name: 'VtPaginationCount',
    components: {RLPaginationCount},
    render() {
        return <r-l-pagination-count scopedSlots={
            {
                default: function (props) {
                    return <p v-show={props.total}>Showing records {props.from} to {props.to} out of {props.total}</p>
                }
            }
        }/>
    }
}
