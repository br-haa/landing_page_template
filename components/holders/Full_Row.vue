<template>
  <section>
    <div class="outer_wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  background: $main_color;
  display: flex;
  justify-content: center;
  padding: $gap;
  .outer_wrapper {
    background: green;
    min-height: 200px;
    display: grid;
    gap: $gap;
  }
}
</style>
