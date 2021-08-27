<template>
  <span class="number">
    <a :href="`tel:1+${number}`">{{ number }}</a>
  </span>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.state.number.value
    },
  },
}
</script>

<style scoped lang="scss">
.number {
  a {
    color: $interact_color;
    text-decoration: none;
    font-weight: inherit;
    font-size: inherit;
  }
}
</style>
