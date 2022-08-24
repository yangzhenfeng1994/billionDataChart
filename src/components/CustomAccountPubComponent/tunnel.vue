<template>
  <div :style="style">
    <div class="tunnel" :style="tunnelStyle">
      <div class="start">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-icon-suidao-zuo"></use>
        </svg>
      </div>
      <div class="end">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-icon-suidao-you"></use>
        </svg>
      </div>
      <div class="desc">
        <div class="name">
          {{ data.name }}
        </div>
        <div class="num">
          {{ data.num }}
        </div>
        <div class="centerMileage">
          {{ data.centerMileage }}
        </div>
        <div class="length">L:{{ data.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tunnel',
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
    tunnelStyle() {
      return {
        width: (this.data.end - this.data.start) * this.singleMeterrPx + 'px',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.tunnel {
  width: max-content;
  bottom: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
  align-items: center;
  background: #fff;
  border-top: 2px dashed #f7d352;
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
