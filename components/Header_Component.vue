<template>
  <div id="header_holder">
    <header class="parent">
      <div class="outer_wrapper">
        <img class="logo" :src="displayPic(content.logo.src)" />
        <span v-if="content.middleText && scrollLocation < 200" class="t5">{{
          content.middleText
        }}</span>
        <div class="call_now_holder">
          <span class="call_now t4">Call Now <NumberComponent /> </span>
          <DynamicButton v-if="content.buttonText" class="hide_large">{{
            content.buttonText
          }}</DynamicButton>
        </div>
      </div>
    </header>
    <div id="header_spacer"></div>
  </div>
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
    scrollLocation: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    content() {
      return this.$store.state.content.header
    },
  },
  methods: {
    scrollTo(location) {
      const loc = document.querySelector(`#${location}`)
      loc.scrollIntoView(true, { behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin header_height {
  min-height: 6rem;
  @media (max-width: $break) {
    min-height: 12rem;
  }
}

header {
  @include header_height;

  width: 100%;
  position: fixed;
  background: $main_color;
  align-items: center;
  box-shadow: $default_shadow;
  color: $light_color;
  z-index: 500;
}
#header_spacer {
  @include header_height;

  width: 100%;
}
.outer_wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $break) {
    justify-content: space-around;
    text-align: center;
    row-gap: $gap;
  }
}

.logo {
  max-height: 5rem;
}
.call_now_holder {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: $gap;
  .call_now {
    white-space: nowrap;
    color: $accent_color;
  }
}
</style>
