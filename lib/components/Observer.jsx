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
                if ((this.next || !this.justIntersected) && (!(!this.next && this.$parent.$parent.$refs.nextObserver.justIntersected))) {
                    this.justIntersected = true;
                    document.querySelector('.table-responsive').scrollBy(0, this.next ? -1 : 1)
                    this.$emit("intersect");
                }
                setTimeout(()=>{
                    this.justIntersected = false
                },100)
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