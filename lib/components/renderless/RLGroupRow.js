export default {
    name: 'RLGroupRow',
    props: ['value', 'level'],
    inject: ['colspan', 'opts', 'theme', 'toggleGroupDirection', 'toggleGroup', 'groupToggleIcon', 'getGroupSlot', 'componentsOverride'],
    render() {
        return this.$slots.default({
            opts: this.opts(),
            theme: this.theme,
            colspan: this.colspan(),
            toggleGroupDirection: this.toggleGroupDirection,
            canToggleGroup: this.opts().toggleGroups,
            toggleGroup: this.toggleGroup,
            groupValue: this.value,
            level: this.level,
            groupToggleIcon: this.groupToggleIcon,
            slot: this.getGroupSlot(this.value),
            override: this.componentsOverride.groupRow,
        })
    }
}
