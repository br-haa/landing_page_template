<template>
  <div class="widget">
    <img />
    <div class="text_and_stars"></div>
    <DynamicButton> </DynamicButton>
  </div>
</template>

<script>
import DynamicButton from './holders/Dynamic_Button.vue'
export default {
  components: {
    DynamicButton,
  },
}
</script>
