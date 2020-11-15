import RLListFilter from "./renderless/RLListFilter";
import {h, ref} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtListFilter',
    inject:['setFilterRef'],
    props: ['column'],
    components: {RLListFilter},
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
        return h(RLListFilter, {
            column: this.column
        }, {
            default: (props) => {

                var options = [];
                let selected;

                props.items.map(option => {
                    selected = String(option.id) === String(props.query[this.column]) && props.query[this.column] !== '';
                    options.push(<option value={option.id} selected={selected}>{option.text}</option>)
                })

                return props.override ? h(props.override, {props: omit(props)}) : <div class="VueTables__list-filter"
                                                                                       ref="filter"
                                                                                       id={'VueTables__' + this.column + '-filter'}>
                    <select class={props.theme.select}
                            onChange={props.search(false)}
                            name={props.name}
                            value={props.value}>
                        <option value="">{props.defaultOption}</option>
                        {options}
                    </select>
                </div>
            }
        })
    }
}

