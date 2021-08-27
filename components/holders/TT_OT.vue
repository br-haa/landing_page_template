<template>
  <div class="two_thirds_one_third">
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.two_thirds_one_third {
  display: grid;
  gap: $gap;
  grid-template-columns: 2fr 1fr;
  min-height: 200px;
  width: 100%;
  @media (max-width: $break) {
    grid-template-columns: 1fr;
  }
}
</style>
