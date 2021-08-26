import Vue from 'vue'

if (!Vue.__widow_mixin__) {
  Vue.__widow_mixin__ = true
  Vue.mixin({
    methods: {
      noWidow(text) {
        if (typeof text === 'string' && text !== '') {
          const lastWord = text.slice(text.lastIndexOf(' ') + 1)
          const index = text.lastIndexOf(' ')
          text = text.substring(0, index)
          return `${text}\xA0${lastWord}`
        }
      },
    },
  })
}
