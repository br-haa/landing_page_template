<template>
  <div id="reviews">
    <div
      v-for="(review, index) in reviews"
      :key="`review${index}`"
      class="review"
      :class="`review${index}`"
      :style="{ gridTemplateColumns: `repeat(${review.reviews.length}, 1fr)` }"
    >
      <div class="top" :style="{ gridColumn: `span ${review.reviews.length}` }">
        <h3 class="t3">{{ review.title }}</h3>
      </div>
      <div
        v-for="subReview in review.reviews"
        :key="subReview.content + index"
        class="bot"
      >
        <div class="testiHolder">
          <p class="tp">{{ subReview.content }}</p>
          <p class="tp">{{ subReview.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    reviews() {
      return this.$store.state.reviews.reviews
    },
  },
}
</script>
