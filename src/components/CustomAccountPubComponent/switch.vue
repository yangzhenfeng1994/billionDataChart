<template>
  <div :style="style" @click="$emit('click')">
    <div class="switch">
      <div class="num">{{ data.num }}</div>
      <!-- <div class="length">{{ data.length }}</div> -->
      <div class="bar">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-zhexian1"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switchComp',
  props: {
    data: {
      type: Object,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return {
          start: 0,
          end: 100,
        }
      },
    },
    singleMeterrPx: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    style() {
      return {
        left: (this.data.start - this.options.start) * this.singleMeterrPx + 'px',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.switch {
  width: max-content;
  bottom: 48%;
  position: absolute;
  .bar {
    svg {
      font-size: 24px;
    }
  }
}
</style>
