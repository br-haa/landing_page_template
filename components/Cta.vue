<template>
  <section class="parent">
    <div class="outer_wrapper">
      <div class="contactBlock">
        <slot name="top"></slot>
        <slot name="mid"></slot>
        <slot name="bot"></slot>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped lang="scss">
.outer_wrapper {
  display: flex;
  justify-content: center;
}
.contactBlock {
  width: 40vw;
  img {
    width: 100%;
  }
  @media (max-width: 1080px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
  }
  .contactCallNow {
    font-size: 3.5vw;
    font-weight: bold !important;
    text-align: center;
    @media (max-width: 1080px) {
      font-size: 8vw;
    }
  }
  button {
    width: 100%;
  }
}
</style>
