<template>
  <div class="two_thirds_one_third">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.two_thirds_one_third {
  display: grid;
  gap: $gap;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 200px;
  width: 100%;
  @media (max-width: $break) {
    grid-template-columns: 1fr;
  }
  .left {
    background: red;
    grid-column: span 2;
    @media (max-width: $break) {
      grid-column: span 1;
    }
  }
  .right {
    background: blue;
  }
}
</style>
