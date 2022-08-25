<template>
  <div class="singleChart" :class="{ reverse: line.reverse }" ref="chartDom" :id="line.id">
    {{ line }}
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'singleChart',
  props: {
    line: {
      // 当前通道的配置
      type: Object,
      default() {
        return {}
      },
    },
    colors: {
      // 日期那边计算下来的颜色
      type: Array,
      default() {
        return []
      },
    },
    data: {
      // 当前通道的数据
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      chart: null, // 图表实例
    }
  },
  methods: {
    init() {
      // 初始化图标实例,绑定拖动窗口事件
      this.chart = echarts.init(this.$refs.chartDom)
      window.addEventListener('resize', () => {
        this.resizeChart()
      })
      // this.chart.on('finished', () => {
      //   this.$emit('finished')
      // })
    },
    updateChart() {
      // 更新图标实例
      if (!this.chart) {
        // 第一次获取数据可能比图表初始化快,处理一下
        setTimeout(() => {
          this.updateChart()
        })
        return
      }
      const data = this.data
      const option = {
        // animation: true,
        animation: false,
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 30,
        },
        xAxis: {
          data: [],
          axisTick: false,
          show: false,
        },
        yAxis: {
          show: false,
          max: this.line?.max || 20,
          min: this.line?.min || null,
        },
        series: [],
        color: this.colors || [],
      }
      data.forEach((item) => {
        option.series.push({
          type: this.line.type,
          data: item,
          legendHoverLink: false,
          triggerLineEvent: false,
          endLabel: {
            show: false,
          },
          labelLine: false,
          symbol: 'none',
          // sampling: 'lttb',
          // 'lttb' 采用 Largest- Triangle - Three - Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值。
          // 'average' 取过滤点的平均值
          // 'max' 取过滤点的最大值
          // 'min' 取过滤点的最小值
          // 'sum' 取过滤点的和
        })
      })
      this.chart.setOption(option, true)
      this.chart.resize()
    },
    resizeChart() {
      this.chart.resize()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
    // setInterval(() => {
    //   this.data.forEach((item) => {
    //     item.shift()
    //     item.push(~~(Math.random() * 20))
    //   })
    //   this.updateChart()
    // }, 100)
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => {
      this.resizeChart()
    })
  },
}
</script>

<style lang="less" scoped>
.singleChart {
  height: 100px;
  position: relative;
  &.reverse {
    transform: rotateX(180deg);
  }
  &/deep/div {
    &:first-child {
      height: 100% !important;
    }
    canvas {
      height: 100% !important;
    }
  }
}
</style>
