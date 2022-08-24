<template>
  <div :style="style">
    <div class="station">{{ data.name }} {{ data.centerMileage }}</div>
  </div>
</template>

<script>
export default {
  name: 'station',
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
.station {
  width: max-content;
  bottom: 55%;
  position: absolute;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  padding: 4px;
  background: #fff;
}
</style>
