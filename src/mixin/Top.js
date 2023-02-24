/*
* Top组件混入
*
* **/
import deBounce from "@/utils/deBounce";
export default function () {
    return {
        data() {
            return {
                isTop: false,
            }
        },
        mounted() {
            this.$bus.$on('TopButtonHandle', this.scrollToTop)
            this.setDebounce =  deBounce(this.scrollCheck,500)
            this.$refs.wrapper.addEventListener('scroll', this.setDebounce)
        },
        beforeDestroy() {
            this.$refs.wrapper.removeEventListener('scroll', this.setDebounce)
        },
        methods:{
            scrollToTop() {
                if (this.$refs.wrapper === undefined) {
                    return
                }
                this.$refs.wrapper.scrollTop = 0;
            },
            scrollCheck() {
                if (this.$refs.wrapper.scrollTop > 200) {
                    this.isTop = true;
                } else {
                    this.isTop = false;
                }
            },
        }

    }
}