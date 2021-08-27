<template>
  <section ref="floater_parent" class="parent">
    <transition name="appear">
      <div v-if="show" class="outer_wrapper animated">
        <slot>
          <h1>test</h1>
        </slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
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
      const SECTION = this.$refs.floater_parent
      const EL_FROM_TOP = SECTION.getBoundingClientRect().y
      if (window.innerHeight >= EL_FROM_TOP) {
        this.show = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.outer_wrapper {
  background: $main_color;
  box-shadow: $default_shadow;
  padding: $gap;
  border-radius: $border_radius;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  color: $light_color;
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
