<template>
  <div ref="badges" class="wrapper">
    <transition-group
      id="badgesRow"
      appear
      :style="{ '--total': content.badges.length }"
      name="badgePop"
      tag="div"
    >
      <div
        v-for="(img, index) in list"
        :key="`badge${index}`"
        :data-index="index"
        class="badgeHolder"
        :style="{ '--i': index }"
      >
        <div :class="`badge${index}`" class="badgeWrapper">
          <img :src="getBadge(img.src)" alt="lawyer badges" />
          <p v-if="img.text" class="badgeText">{{ `${img.text}` }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'BadgesRow',
  props: {
    scrollLocation: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      show: false,
      list: [],
    }
  },
  computed: {
    content() {
      return this.$store.state.content
    },
  },
  watch: {
    scrollLocation() {
      this.eltop()
    },
  },
  methods: {
    getBadge(img) {
      return require(`@/assets/img/badges/${img}`)
    },
    eltop() {
      const SECTION = this.$refs.badges
      const EL_FROM_TOP = SECTION.getBoundingClientRect().y
      if (window.innerHeight >= EL_FROM_TOP) {
        this.list = this.content.badges
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#badgesRow {
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  filter: drop-shadow(0 0 2px black);
  z-index: 0;
  gap: 1rem;
  .badgeHolder {
    max-width: clamp(200px, 16vw, 230px);
    max-height: clamp(200px, 16vw, 230px);
    display: grid;
    .badgeWrapper {
      place-self: center;
      display: grid;
    }
    img {
      object-fit: scale-down;
      width: 100%;
      place-self: center;
      grid-area: 1/1/1/1;
      margin-bottom: 2.5rem;
    }
    .badgeText {
      width: 100%;
      background: hsla(0, 0%, 100%, 0.8);
      text-align: center;
      border-radius: 360px;
      grid-area: 1/1/1/1;
      align-self: end;
    }
  }
  .badgePop {
    &-enter-active {
      transition: opacity 0.5s linear,
        transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
      transition-delay: calc(0.3s * var(--i));
    }

    &-enter {
      transform: translateY(1em) rotate(-50deg);
      opacity: 0;
    }
  }
}
</style>
