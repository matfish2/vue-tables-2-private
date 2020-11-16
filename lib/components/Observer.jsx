export default {
    emits:['intersect'],
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
            root: this.$refs.tablewrapper
        });

        this.observer.observe(this.$el);
    },
    unmounted() {
        this.observer.disconnect();
    },
};
