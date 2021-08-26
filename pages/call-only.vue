<template>
  <a :href="`tel:+1${coNumber}`">{{ coNumber }}</a>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      coNumber: '',
      numbers: {
        0: '123-456-7890', // bjn
      },
    }
  },
  computed: {
    geo() {
      return this.$store.state.geo.value
    },
  },
  created() {
    switch (this.geo) {
      default:
        this.coNumber = this.numbers['0']
    }
  },
}
</script>
