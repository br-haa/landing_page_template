<template>
  <button @click="$emit('button_press)')">
    <slot>test</slot>
  </button>
</template>
<style lang="scss" scoped>
button {
  border-radius: 360px;
  padding: 0.5rem 3rem 0.5rem 3rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 3px 1px black;
  transition: 0.3s ease;
  background: $interact_color;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px 2px black;
  }
  &:active {
    transition: 0.01s !important;
    transform: scale(0.99) !important;
    box-shadow: 0 0 1px 1px black;
  }
}
</style>
