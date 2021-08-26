import Vue from 'vue'
import marked from 'marked'
import insane from 'insane'
// import DOMpurify from 'dompurify'
if (!Vue.__md_mixin__) {
  Vue._md_mixin__ = true
  Vue.mixin({
    methods: {
      markdown(text) {
        if (text) {
          const mk = marked(text)
          const mki = insane(mk, {
            allowedAttributes: {
              h1: ['class'],
              h2: ['class'],
              h3: ['class'],
              h4: ['class'],
              h5: ['class'],
            },
          })
          return mki
        }
      },
    },
  })
}
