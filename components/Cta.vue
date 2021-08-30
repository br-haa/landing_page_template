<template>
  <section ref="cta" class="parent">
    <div class="outer_wrapper">
      <transition name="appear">
        <div v-if="show" class="contactBlock animated">
          <img :src="displayPic(content.img.src)" :alt="content.img.alt" />
          <h3 class="t3 contactCallNow">
            {{ content.text }}
            <span><NumberComponent /></span>
          </h3>
          <DynamicButton>{{ content.buttonText }}</DynamicButton>
        </div>
      </transition>
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
    scrollLocation: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {
    scrollLocation() {
      this.eltop()
    },
  },
  methods: {
    eltop() {
      const SECTION = this.$refs.cta
      const EL_FROM_TOP = SECTION.getBoundingClientRect().y
      if (window.innerHeight >= EL_FROM_TOP) {
        this.show = true
      }
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
.animated {
  transition: all 1.5s;
}
.appear-enter-active {
  opacity: 1;
  transform: translateY(0);
}
.appear-enter {
  opacity: 0;
  transform: translateY(35px);
}
</style>
