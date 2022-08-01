<template>
  <div class="chartLayer">
    <singleChart
      v-for="(item, idx) in lines"
      ref="charts"
      :key="item.id"
      :colors="colors"
      :line="item"
      :data="yData[idx]"
      :style="{ top: (styles.tops[idx] || 0) + 'px', height: (styles.heights[idx] || 100) + 'px' }"
    ></singleChart>
  </div>
</template>

<script>
import singleChart from './singleChart'
export default {
  name: 'chartLayer',
  components: { singleChart },
  props: {
    xData: {
      type: Array,
      default() {
        return []
      },
    },
    yData: {
      type: Array,
      default() {
        return []
      },
    },
    lines: {
      type: Array,
      default() {
        return []
      },
    },
    dates: {
      type: Array,
      default() {
        return []
      },
    },
    styles: {
      type: Object,
      default() {
        return {
          tops: [],
          heights: [],
        }
      },
    },
  },
  computed: {
    colors() {
      return this.dates.map((item) => item.color) || []
    },
  },
  data() {
    return {}
  },
  methods: {
    initCharts(idx) {
      if (idx) {
        this.$refs?.charts[idx]?.updateChart()
      } else {
        this.$refs.charts.forEach((item) => item.updateChart())
      }
    },
    resizeCharts() {
      this.$refs.charts.forEach((item) => item.resizeChart())
    },
  },
}
</script>

<style lang="less" scoped>
.chartLayer {
  position: relative;
}
</style>
