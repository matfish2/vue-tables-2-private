module.exports = {
    methods: {
        getThStyle() {
            var cls = '';

            if (this.opts().stickyHeader) {
                cls += 'position:sticky; top:0;';
            }

            if (this.opts().stickyHeaderBackground) {
                cls += `background:${this.opts().stickyHeaderBackground};`;
            }

            return cls;
        }
    }
}
