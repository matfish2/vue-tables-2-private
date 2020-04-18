import RLGroupRow from "./renderless/RLGroupRow";

export default {
    name: 'VtGroupRow',
    components: {RLGroupRow},
    props: ['level', 'value'],
    render() {
        return <r-l-group-row level={this.level} value={this.value} scopedSlots={
            {
                default: function (props) {
                    return props.override ? h(props.override, {attrs: {props}}) :
                        <tr class={`VueTables__group-row VueTables__group-row--${props.level}`}
                            on-click={props.toggleGroupDirection}>
                            <td colspan={props.colspan}>
                                {props.canToggleGroup ? <button
                                    class={props.theme.button}
                                    on-click={props.toggleGroup.bind(this, props.groupValue)}>{props.groupValue}<span
                                    class={`VueTables__group-toggler ${props.groupToggleIcon(props.groupValue)}`}></span></button> : ''}
                                {!props.canToggleGroup ? <span>{props.groupValue}</span> : ''}
                                {props.slot}
                            </td>
                        </tr>
                }
            }
        }>
        </r-l-group-row>
    }
}
