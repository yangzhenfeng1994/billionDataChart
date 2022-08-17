<template>
  <div class="chartLayer">
    <!-- 图表图层的单个图表 -->
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
      // x 轴数据
      type: Array,
      default() {
        return []
      },
    },
    yData: {
      // y 轴数据
      type: Array,
      default() {
        return []
      },
    },
    lines: {
      // 通道数据
      type: Array,
      default() {
        return []
      },
    },
    dates: {
      // 日期数据
      type: Array,
      default() {
        return []
      },
    },
    styles: {
      // 样式数据,高度和位置
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
      // 抽离日期数据中的颜色,拼成数组给图表使用
      return this.dates.map((item) => item.color) || []
    },
  },
  data() {
    return {}
  },
  methods: {
    initCharts(idx) {
      // 初始化图表,根据是否传入索引,初始化单个或者全部
      if (idx) {
        this.$refs?.charts[idx]?.updateChart()
      } else {
        this.$refs.charts.forEach((item) => item.updateChart())
      }
    },
    resizeCharts() {
      // 重置图表大小
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
