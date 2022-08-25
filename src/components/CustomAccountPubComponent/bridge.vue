<template>
  <div :style="style" @click="$emit('click')">
    <div class="bridge" :style="bridgeStyle">
      <div class="start">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-icon-qiaoliang-zuo"></use>
        </svg>
      </div>
      <div class="end">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-icon-qiaoliang-you"></use>
        </svg>
      </div>
      <div class="desc">
        <div class="name">
          {{ data.name }}
        </div>
        <!-- <div class="num">
          {{ data.num }}
        </div>
        <div class="centerMileage">
          {{ data.centerMileage }}
        </div> -->
        <!-- <div class="length">L:{{ data.length }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bridge',
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
    bridgeStyle() {
      return {
        width: (this.data.end - this.data.start) * this.singleMeterrPx + 'px',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.bridge {
  width: max-content;
  bottom: 50%;
  position: absolute;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
  align-items: center;
  .start,
  .end {
    position: absolute;
    font-size: 30px;
    z-index: 1;
  }
  .start {
    left: 0;
    transform: translateX(-50%);
  }
  .end {
    right: 0;
    transform: translateX(50%);
  }
  .desc {
    position: absolute;
    top: calc(100% + 10px);
    width: max-content;
    background: #fff;
  }
}
</style>
