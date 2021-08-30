<template>
  <section class="parent">
    <div id="scroller" class="outer_wrapper">
      <div>
        <div id="titleGrid">
          <div class="titleLine"></div>
          <h1 class="t2">{{ $store.state.content.scroller.title }}</h1>
          <div class="titleLine"></div>
        </div>
        <div id="scrollerHolder">
          <button
            id="leftButton"
            aria-label="left"
            class="scrollButton"
            @click="move('back')"
          >
            <span class="buttonArrow"> </span>
          </button>
          <div class="textDisplay" @click="move('front')">
            <transition name="slide" mode="out-in">
              <span
                :key="$store.state.content.scroller.list[counter]"
                class="t4"
              >
                {{ $store.state.content.scroller.list[counter] }}
              </span>
            </transition>
          </div>
          <button
            id="rightButton"
            aria-label="right"
            class="scrollButton"
            @click="move('front')"
          >
            <span class="buttonArrow"> </span>
          </button>
        </div>
        <div class="scrollerLine"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Scroller',
  data() {
    return {
      counter: 0,
    }
  },
  computed: {},
  mounted() {
    const scroller = document.querySelector('#scroller')
    let interval = window.setInterval(this.move, 3500)
    const intervalControl = (num) => {
      const controler = num
      if (controler === 0) {
        clearInterval(interval)
      } else {
        interval = window.setInterval(this.move, 3500)
      }
    }
    scroller.addEventListener('mouseenter', (event) => {
      intervalControl(0)
    })
    scroller.addEventListener('mouseleave', (event) => {
      intervalControl(1)
    })
  },
  destroyed() {
    let interval = window.setInterval(this.move, 3500)
    const intervalControl = (num) => {
      const controler = num
      if (controler === 0) {
        clearInterval(interval)
      } else {
        interval = window.setInterval(this.move, 3500)
      }
    }
    removeEventListener('mouseenter', (event) => {
      intervalControl(0)
    })
    removeEventListener('mouseenter', (event) => {
      intervalControl(1)
    })
  },
  methods: {
    move(direction) {
      const items = this.$store.state.content.scroller.list
      if (direction === 'back') {
        if (this.counter === 0) {
          this.counter = items.length - 1
        } else {
          this.counter--
        }
      } else if (this.counter === items.length - 1) {
        this.counter = 0
      } else {
        this.counter++
      }
    },
  },
}
</script>

<style scoped lang="scss">
.scrollButton {
  border: none;
  height: 100px;
  width: 100px;
  cursor: pointer;
  background: none;
  filter: drop-shadow(0 0 3px black);
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:active {
    transition: 0.01s !important;
    transform: scale(0.99) !important;
    filter: drop-shadow(0 0 1px black) !important;
  }
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 5px black);
  }
  @media (max-width: 1080px) {
    height: 60px;
    width: 60px;
  }
  .buttonArrow {
    display: block;
    clip-path: polygon(75% 0%, 100% 50%, 77% 100%, 37% 100%, 63% 51%, 40% 0);
    height: 100%;
    width: 100%;
    pointer-events: none;
    background: $interact_color;
  }
}
#leftButton {
  .buttonArrow {
    transform: rotate(180deg);
  }
}
#titleGrid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1080px) {
    margin-bottom: 1rem;
  }
  .titleLine {
    height: 3px;
    width: 70%;
    background: $accent_color;
    &:first-child {
      justify-self: end;
    }
  }
}
#scroller {
  box-sizing: border-box;
}
#scrollerHolder {
  display: flex;
  justify-content: space-between;
}
.scrollerLine {
  width: 80%;
  height: 3px;
  margin: auto;
}
.textDisplay {
  text-align: center;
  display: grid;
  place-items: center;
}
#cts {
  text-align: center;
  margin-bottom: 5px;
}
.slide-enter-active {
  animation: fade 1.4s forwards;
}
.slide-enter {
  opacity: 0;
}
.slide-leave-to {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
