<template>
  <section class="parent">
    <div class="outer_wrapper">
      <div class="contactBlock">
        <img :src="displayPic(content.img.src)" :alt="content.img.alt" />
        <h3 class="t3 contactCallNow">
          {{ content.text }}
          <span><NumberComponent /></span>
        </h3>
        <DynamicButton>{{ content.buttonText }}</DynamicButton>
      </div>
    </div>
  </section>
</template>

<script>
import DynamicButton from './holders/Dynamic_Button.vue'
import NumberComponent from './Number_Component.vue'
export default {
  components: {
    DynamicButton,
    NumberComponent,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.outer_wrapper {
  display: flex;
  justify-content: center;
}
.contactBlock {
  width: 40vw;
  img {
    width: 100%;
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
  }
  .contactCallNow {
    font-weight: bold !important;
    text-align: center;
    @media (max-width: 1080px) {
      font-size: 8vw;
    }
  }
  button {
    width: 100%;
  }
}
</style>
