import RLTextFilter from "./renderless/RLTextFilter";
import {h,ref} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTextFilter',
    inject:['setFilterRef'],
    props: {
        column: {
            required: true,
            type: String
        }
    },
    components: {RLTextFilter},
     setup() {
        const filter = ref(null);

        return {
            filter,
        };
    },
    mounted() {
        this.setFilterRef(this.column, this.$refs.filter)
    },
    render() {
        return h(RLTextFilter, {
            column: this.column
        }, {
            default: (props) => {
                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <input
                    ref="filter"
                    onKeyup={props.search(props.debounce)}
                    class={props.theme.input}
                    name={props.name}
                    type="text"
                    placeholder={props.display('filterBy', {column: props.getHeading(this.column)})}
                    autocomplete="off"
                />
            }
        })
    }
}

