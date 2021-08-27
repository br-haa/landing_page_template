<template>
  <section class="parent">
    <div class="wrapper">
      <div
        class="hero_left"
        :style="{
          background: `url(${displayPic(content.portrait.src)})`,
        }"
      >
        <span class="t4">{{ content.left }}</span>
      </div>
      <div class="hero_right">
        <div class="text_holder">
          <h1 class="t1">{{ noWidow(headlines.value[hlSet].headline) }}</h1>
          <h2 class="t3 accent_text">
            {{ noWidow(headlines.value[hlSet].subhead) }}
          </h2>
          <ul>
            <li
              v-for="(item, index) in content.blerb"
              :key="`blerb${index}`"
              class="t5"
            >
              {{ noWidow(item) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.content.hero
    },
    headlines() {
      return this.$store.state.headlines
    },
    hlSet() {
      return this.headlines.inUse
    },
  },
}
</script>
<style lang="scss" scoped>
@mixin hero_sides {
  min-height: 80vh;
  width: 50%;
  box-sizing: border-box;
  @media (max-width: $break) {
    width: 100%;
    min-height: 50vh;
  }
}
section {
  margin-top: -$l_gap;
  background: green;
  width: 100%;
  .wrapper {
    background: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .hero_left {
      @include hero_sides;

      padding: 3rem 0 0 0;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      display: grid;
      span {
        margin: 0 0 3rem 0;
        width: 100%;
        background: rgba($accent_color, 0.5);
        align-self: end;
        text-align: center;
      }
    }
    .hero_right {
      @include hero_sides;

      padding: 3rem 2rem 2rem 2rem;
      background: $light_color;
      display: grid;
      box-shadow: 0 -5px 3px 5px black;
      .text_holder {
        align-self: center;
        @media (max-width: $break) {
          align-self: start;
        }
        ul {
          margin-top: $gap;
          padding-left: 1rem;
        }
      }
      @media (max-width: $break) {
        min-height: auto;
        border-bottom: 6px solid $main_color;
        box-shadow: none;
        padding: 1rem;
      }
    }
  }
}
</style>
