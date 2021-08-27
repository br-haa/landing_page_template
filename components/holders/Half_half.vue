<template>
  <div class="half">
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.half {
  display: grid;
  gap: $gap;
  grid-template-columns: 1fr 1fr;
  min-height: 200px;
  width: 100%;
  @media (max-width: $break) {
    grid-template-columns: 1fr;
  }
  .left {
    background: purple;
  }
  .right {
    background: yellow;
  }
}
</style>
