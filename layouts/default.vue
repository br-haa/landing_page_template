<template>
  <div id="main_wrapper">
    <nuxt />
    <Header :scroll-location="scroll_location" />
    <Hero />
    <section id="post_hero_button_row">
      <DynamicButton>{{ content.hero.whyButton }}</DynamicButton>
    </section>
    <Floater :scroll-location="scroll_location"
      ><TT_OT>
        <div>
          <h1 class="t3">{{ noWidow(content.largestBlock.headline) }}</h1>
          <h2 class="t5 accent_text">
            {{ noWidow(content.largestBlock.subhead) }}
          </h2>
        </div>
        <img />
      </TT_OT>
    </Floater>
    <Badges v-if="content.badges" :scroll-location="scroll_location" />
    <Scroller />
    <FullRow>
      <TT_OT>
        <div>
          <h1 class="t3">{{ noWidow(content.experienced.headline) }}</h1>
          <h2 class="t5 accent_text">
            {{ noWidow(content.experienced.subhead) }}
          </h2>
        </div>
        <img /> </TT_OT
      ><HalfHalf>
        <ReviewWidget
          v-for="(widget, index) in content.experienced.widgets"
          :key="`widget${index}`"
          :content="widget"
        /> </HalfHalf
    ></FullRow>
    <Cta :scroll-location="scroll_location" :content="content.cta1"> </Cta>
    <FullRow> <FormComponent /> </FullRow>
    <Floater :scroll-location="scroll_location"> <Fresh /> </Floater>
    <section id="help">
      <h1 v-if="content.help.headline" class="t3">
        {{ noWidow(content.help.headline) }}
      </h1>
      <h2 v-if="content.help.subhead" class="accent_text t2">
        {{ noWidow(content.help.subhead) }}
      </h2>
    </section>
    <FooterComponent>
      <Reviews />
      <Cta :scroll-location="scroll_location" :content="content.cta2"> </Cta>
      <Disclaimer />
      <Copyright />
    </FooterComponent>
  </div>
</template>

<script>
import Header from '../components/Header_Component.vue'
import Hero from '../components/Hero.vue'
import Floater from '../components/holders/Floater.vue'
import Badges from '../components/Badges.vue'
import Scroller from '../components/Scroller.vue'
import FullRow from '../components/holders/Full_Row.vue'
import Cta from '../components/Cta.vue'
import FormComponent from '../components/Form_Component.vue'
import DynamicButton from '../components/holders/Dynamic_Button.vue'
import TT_OT from '../components/holders/TT_OT.vue'
import HalfHalf from '../components/holders/Half_half.vue'
import Fresh from '../components/Fresh.vue'
import ReviewWidget from '../components/Review_Widget.vue'
import FooterComponent from '../components/holders/Footer_component.vue'
import Reviews from '../components/Reviews.vue'
import Disclaimer from '../components/Disclaimer.vue'
import Copyright from '../components/Copyright.vue'

export default {
  components: {
    Header,
    Hero,
    Floater,
    Badges,
    Scroller,
    FullRow,
    Cta,
    FormComponent,
    DynamicButton,
    TT_OT,
    HalfHalf,
    Fresh,
    ReviewWidget,
    FooterComponent,
    Reviews,
    Disclaimer,
    Copyright,
  },
  data() {
    return {
      test: 1,
      scroll_location: 0,
    }
  },
  computed: {
    content() {
      return this.$store.state.content
    },
  },
  mounted() {
    window.addEventListener(
      'scroll',
      this.debounce(() => this.setData())
    )
  },
  destroyed() {
    window.removeEventListener(
      'scroll',
      this.debounce(() => this.setData())
    )
  },
  methods: {
    debounce(func, timeout = 10) {
      // todo add timeout logic
      return (...args) => {
        func.apply(this.args)
      }
    },
    setData() {
      this.scroll_location = window.pageYOffset
    },

    scrollTo(location) {
      const loc = document.querySelector(`#${location}`)
      loc.scrollIntoView(true, { behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
#main_wrapper {
  display: grid;
  row-gap: $l_gap;
  #post_hero_button_row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #help {
    text-align: center;
  }
}
</style>
