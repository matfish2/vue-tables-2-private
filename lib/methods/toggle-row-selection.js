module.exports = function (e, row, index) {

    var id = this.opts.uniqueKey;

    if (this.opts.selectable.mode === 'single') {
        this.selectedRows = e.target.checked ? [row] : [];
    } else {
        const prevIndex = this.selectedIndex;
        this.selectedIndex = index;

        // Handle multiple select via Shift+Click
        if (e.shiftKey && prevIndex !== this.selectedIndex) {
            // Get the subset of the message list between the
            // two indicies.
            const subset = this.filteredData.slice(
                Math.min(prevIndex, this.selectedIndex),
                Math.max(prevIndex, this.selectedIndex)
            )

            // Determine the operation based on the checked state
            // of the clicked checkbox.
            const toggleFn = e.target.checked ? addCheckedSubset : removeCheckedSubset;

            this.selectedRows = toggleFn(this.selectedRows, subset);
        } else {
            if (e.target.checked) {
                this.selectedRows.push(row)
            } else {
                this.selectedRows = this.selectedRows.filter(R => R[id] !== row.id)
            }
        }

        this.dispatch('select', this.selectedRows)
    }
}

const notInArr = function notInArr(item) {
    return this.indexOf(item) === -1;
};

function addCheckedSubset(current, add) {
    if (!current.length) return add;

    // Add only items which are not already checked
    return current.concat(add.filter(notInArr, current));
}

function removeCheckedSubset(current, remove) {
    // Return only items which are not in subset
    return current.filter(notInArr, remove);
}