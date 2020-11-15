export default {
    data: () => ({
        observer: null
    }),
    render() {
        return <div class='observer'/>
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit("intersect");
            }
        }, {
            root: this.$parent.$el.querySelector('.table-responsive'),
        });

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    },
};
