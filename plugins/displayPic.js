import Vue from 'vue'

if (!Vue.__pic_mixin__) {
  Vue.__pic_mixin__ = true
  Vue.mixin({
    methods: {
      displayPic(pic) {
        try {
          const picture = require(`@/assets/img/${pic}`)
          return picture
        } catch (e) {
          return false
        }
      },
    },
  })
}
