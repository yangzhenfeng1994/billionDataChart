<template>
  <div :style="style">
    <div class="chart">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-icon-hanqu"></use>
      </svg>
    </div>
    <div class="culvert">
      <div class="name">{{ data.name }}</div>
      <div class="centerMileage">{{ data.centerMileage }}</div>
      <div class="length">{{ data.length }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'culvert',
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
.chart {
  font-size: 20px;
}
.culvert {
  width: max-content;
  top: 55%;
  position: absolute;
}
</style>
