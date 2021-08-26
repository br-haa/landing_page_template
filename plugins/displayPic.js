import Vue from 'vue'

if (!Vue.__pic_mixin__) {
  Vue.__pic_mixin__ = true
  Vue.mixin({
    methods: {
      displayPic(pic) {
        return require(`@/assets/img/${pic}`)
      },
    },
  })
}
