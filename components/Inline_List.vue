<template>
  <ul>
    <li v-for="item in list" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  column-gap: 5rem;
  flex-wrap: wrap;
  li {
    font-size: clamp(1.1rem, 10 * 1vw / 2.6, 1.85rem);
    &::marker {
      color: $accent_color;
      content: '✔ ';
    }
  }
  @media (max-width: 1080px) {
    grid-gap: 0;
    width: 80%;
    margin: 0;
    padding-left: 6%;
    li {
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
