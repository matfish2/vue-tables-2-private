import RLDateFilter from "./renderless/RLDateFilter";
import {h, ref} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtDateFilter',
    inject:['setFilterRef'],
    props: ['column'],
    components: {RLDateFilter},
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
        return h(RLDateFilter, {
            column: this.column
        }, {
            default: (props) => {
                return props.overide ? h(props.override, {
                    props: omit(props)
                }) : <div class="VueTables__date-filter" ref="filter" id={'VueTables__' + this.column + '-filter'}>
                    <span class="VueTables__filter-placeholder">{props.placeholder}</span>
                </div>
            }
        })
    }
}

