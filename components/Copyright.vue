<template>
  <div id="copyright">© {{ year }}</div>
</template>

<script>
export default {
  computed: {
    year() {
      const d = new Date()
      return d.getFullYear()
    },
    content() {
      return this.$store.state.content.copyright
    },
  },
}
</script>
