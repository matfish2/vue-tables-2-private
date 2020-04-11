export default {
    data: () => ({
        observer: null,
        justIntersected: false
    }),
    props: {
        next: {
            type: Boolean
        }
    },
    render() {
        return <div class='observer'/>
    },
    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                document.querySelector('.table-responsive').scrollBy(0, this.next ? -1 : 1)
                this.$emit("intersect");
            }
        }, {
            root: document.querySelector('.table-responsive'),
            // rootMargin:'30px'
        });

        this.observer.observe(this.$el);
    },
    destroyed() {
        this.observer.disconnect();
    },
};