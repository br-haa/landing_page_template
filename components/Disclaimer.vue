<template>
  <div id="disclaimer">
    <h3 class="t3">Disclaimer</h3>
    <p
      v-for="(paragraph, index) in disclaimer"
      :key="`disPara${index}`"
      class="tp"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.disclaimer.paragraphs
    },
  },
}
</script>
