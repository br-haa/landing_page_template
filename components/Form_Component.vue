<template>
  <section>
    <div class="outer_wrapper">
      <form-controller
        :bjn="$store.state.form.value.bjn"
        :form-reactor="$store.state.form.value.reactor"
        :theme="{
          hsla: { h: 217, s: 73, l: 15, a: 1 },
          accent: { h: 43, s: 93, l: 52, a: 1 },
          background: { h: 217, s: 87, l: 6, a: 1 },
          textColor: { h: 217, s: 87, l: 100, a: 1 },
          isDark: false,
        }"
        :client-link="$store.state.form.value.clientLink"
        :post-values="[
          { id: 'URL', value: $route.fullPath },
          { id: 'bjn', value: $store.state.number.value },
          { id: 'camp', value: $store.state.camp.value },
          {
            id: 'lead-source',
            value: $store.state.form.value.leadSource,
          },
          {
            id: 'lead-vendor',
            value: $store.state.form.value.leadVendor,
          },
        ]"
      >
        <h1 class="t4">
          Call Now <NumberComponent />
          <br class="hide_large" />
          {{ noWidow(content.headline) }}
        </h1>
        <h2 id="formBotText" class="t2 accent_text">
          {{ noWidow(content.subhead) }}
        </h2>
      </form-controller>
    </div>
  </section>
</template>

<script>
import NumberComponent from './Number_Component.vue'
export default {
  components: {
    NumberComponent,
  },
  computed: {
    content() {
      return this.$store.state.content.form
    },
  },
}
</script>
<style lang="scss" scoped>
section {
  color: white;
}
</style>
<style lang="scss">
#form-inside {
  .consent-text {
    font-size: 0.8rem !important;
  }
  #SubmitButton {
    border-radius: 360px;
  }
  .fields {
    color: black;
  }
  .fieldFocus {
    color: white !important;
  }
  .buttonGrid {
    margin-top: 0.5rem !important;
  }
  #Message {
    height: 100px;
  }
  #formTopText {
    margin: 0;
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
  }
  #formBotText {
    margin: 0;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
}
</style>
