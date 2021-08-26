import Vue from 'vue'

if (!Vue.__scroll_mixin__) {
  Vue.__scroll_mixin__ = true
  Vue.mixin({
    data() {
      return {
        scroll_location: 1,
      }
    },
    mounted() {
      window.addEventListener(
        'scroll',
        this.debounce(() => this.setData())
      )
    },
    destroyed() {
      window.removeEventListener(
        'scroll',
        this.debounce(() => this.setData())
      )
    },
    methods: {
      debounce(func, timeout = 10) {
        // todo add timeout logic
        return (...args) => {
          func.apply(this.args)
        }
      },
      setData() {
        this.scroll_location = window.pageYOffset
      },
    },
  })
}
