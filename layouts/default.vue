<template>
  <div id="main_wrapper">
    <nuxt />
    <Header />
    <Hero />
    <section id="post_hero_button_row">
      <DynamicButton></DynamicButton>
    </section>
    <Floater><TT_OT></TT_OT> </Floater>
    <Badges v-if="content.badges" />
    <Scroller />
    <FullRow> <TT_OT></TT_OT><HalfHalf></HalfHalf></FullRow>
    <Cta>
      <template #top>
        <img
          :src="displayPic(content.cta1.img.src)"
          :alt="content.cta1.img.alt"
        />
      </template>
      <template #mid>
        <h3 class="t3 contactCallNow">
          {{ content.cta1.text }}
          <span><Number /></span>
        </h3>
      </template>
      <template #bot>
        <DynamicButton class="tp" @buttonPress="scrollTo('formBlock')">{{
          content.cta1.buttonText
        }}</DynamicButton>
      </template>
    </Cta>
    <FullRow> <FormComponent /> </FullRow>
    <Floater> <Fresh /> </Floater>
    <section id="help">
      <h1 v-if="content.help.headline" class="t3">
        {{ content.help.headline }}
      </h1>
      <h2 v-if="content.help.subhead" class="accent_text t2">
        {{ content.help.subhead }}
      </h2>
    </section>
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
  },
  data() {
    return {
      test: 1,
    }
  },
  computed: {
    content() {
      return this.$store.state.content
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
