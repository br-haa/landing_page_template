<template>
  <div class="widget">
    <img :src="displayPic(`icons/${content.img.src}`)" alt="" />
    <div class="text_and_stars">
      <span class="t5"
        >{{ content.reviewAmount }} {{ content.reviewType }}</span
      >
      <div v-if="content.stars" class="starsHolder">
        <img
          v-for="(star, index) in Math.floor(content.stars)"
          :key="index"
          :src="displayPic('icons/stars/star.svg')"
          alt="star"
        />
        <img
          v-if="content.stars % 1 !== 0"
          :src="displayPic('icons/stars/starHalf.svg')"
          alt="star"
        />
      </div>
      <p v-if="content.text" class="tp widgetText">
        {{ content.text }}
      </p>
    </div>
    <DynamicButton>{{ content.buttonText }} </DynamicButton>
  </div>
</template>

<script>
import DynamicButton from './holders/Dynamic_Button.vue'
export default {
  components: {
    DynamicButton,
  },
  props: {
    content: {
      type: Object,
      required: true,
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
.widget {
  display: flex;
  align-items: center;
  gap: $gap;
  img {
    max-height: 100px;
    width: clamp(50px, 2vw, 80px);
  }
  @media (max-width: $break) {
    width: clamp(300px, 90%, 700px);
    justify-self: center;
    flex-wrap: wrap;
  }
}
.starsHolder {
  display: flex;
  width: 98%;
  justify-content: space-between;
  gap: 1rem;
  img {
    $size: clamp(13px, 2vw, 40px);

    width: $size;
    height: $size;
  }
}
</style>
