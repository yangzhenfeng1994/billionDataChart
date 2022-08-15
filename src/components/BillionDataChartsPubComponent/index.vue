<template>
  <div ref="BillionDataCharts" class="BillionDataCharts" @mouseleave="mouseleave">
    <div class="layers" ref="layers" @click="clickLayers">
      <chartLayer
        ref="charts"
        :xData="xData"
        :yData="yData"
        :lines="lines"
        :dates="dates"
        :styles="{
          tops,
          heights,
        }"
      ></chartLayer>
      <splitLineLayer
        :xData="xData"
        :solidLineGap="solidLineGap"
        :dottedLineGap="dottedLineGap"
        :layerWidth="layerWidth"
      ></splitLineLayer>
      <modalLayer
        :lines="lines"
        :mouseX="mouseX"
        :mouseY="mouseY"
        :yData="yData"
        :dates="dates"
        :contrastDateIdx="contrastDateIdx"
        :mouseIdx="mouseIdx"
        :layerWidth="layerWidth"
        :layerHeight="layerHeight"
      ></modalLayer>
    </div>
    <div class="infos">
      <infoLayer
        :lines="lines"
        :yData="yData"
        :contrastDateIdx="contrastDateIdx"
        :mouseIdx="mouseIdx"
        :styles="{
          tops,
          heights,
        }"
        @dblclick="dblclickInfo"
        @drag="dragInfo"
        @contextmenu="contextmenuInfo"
      ></infoLayer>
    </div>
  </div>
</template>

<script>
import chartLayer from './chartLayer'
import splitLineLayer from './splitLineLayer'
import infoLayer from './infoLayer'
import modalLayer from './modalLayer'
import utils from './utils'

export default {
  name: 'BillionDataCharts',
  components: {
    chartLayer,
    splitLineLayer,
    infoLayer,
    modalLayer,
  },
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
    contrastDateIdx: {
      type: Number,
      default: 0,
    },
    solidLineGap: {
      type: Number,
      default: 100,
    },
    dottedLineGap: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    mousePercent() {
      return this.mouseX / this.layerWidth
    },
    mouseIdx() {
      return Math.round(this.xData.length * this.mousePercent)
    },
  },
  data() {
    return {
      tops: [],
      heights: [],
      layerWidth: null,
      layerHeight: null,
      mouseX: -1000,
      mouseY: -1000,
      clientX: -1000,
      clientY: -1000,
      dragArr: [],
      dragIdx: -1,
      start: 0,
      init: 0,
    }
  },
  methods: {
    initCharts(idx) {
      this.$refs.charts.initCharts(idx)
    },
    resizeCharts() {
      this.$refs.charts.resizeCharts()
    },
    dblclickInfo(idx) {
      this.$emit('dblclickInfo', idx)
    },
    getWrapperWidth() {
      this.layerWidth = utils.getStyle(this.$refs.layers, 'width')
      this.$nextTick(() => {
        this.layerHeight = utils.getStyle(this.$refs.layers, 'height')
      })
    },
    mousemove(e) {
      this.mouseX = utils.getTargetMouseX(e, this.$refs.BillionDataCharts)
      this.mouseY = utils.getTargetMouseY(e, this.$refs.BillionDataCharts)
      this.clientX = e.clientX
      this.clientY = e.clientY
      if (this.dragArr) this.dragItem()
    },
    mouseleave() {
      this.mouseX = -10000
    },
    mouseup() {
      if (this.dragArr) {
        this.initCharts(this.dragIdx)
      }
      this.dragArr = null
    },
    dragInfo(type, idx, e) {
      this.dragArr = type === 'height' ? this.heights : this.tops
      this.dragIdx = idx
      this.start = e.clientY
      this.init = this.dragArr[idx] || (type === 'height' ? 100 : 0)
    },
    dragItem() {
      const tar = this.init + this.clientY - this.start
      this.$set(this.dragArr, this.dragIdx, tar)
    },
    clickLayers() {
      const arr = []
      let t = 0
      this.lines.forEach((item, idx) => {
        const nowYtop = t + (this.tops[idx] || 0)
        const nowYbottom = nowYtop + (this.heights[idx] || 100)
        if (nowYtop <= this.mouseY && nowYbottom >= this.mouseY) {
          arr.push(idx)
        }
        t += this.heights[idx] || 100
      })
      this.$emit('clickLayers', this.mouseIdx, arr)
    },
    contextmenuInfo(item, idx) {
      this.$emit('contextmenuInfo', this.yData[idx])
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mousemove)
    window.addEventListener('mouseup', this.mouseup)
    window.addEventListener('resize', this.getWrapperWidth)
    this.$nextTick(() => {
      this.getWrapperWidth()
    })
  },
}
</script>

<style lang="less" scoped>
.BillionDataCharts {
  position: relative;
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;
  & > div {
    height: max-content;
  }
  .layers {
    position: relative;
    flex: 1 1 10px;
    width: 10px;
  }
  .infos {
    position: relative;
    width: 100px;
    flex: 0 0 auto;
    border-left: 1px solid #eee;
  }
}
</style>
