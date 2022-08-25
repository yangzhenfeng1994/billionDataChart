<template>
  <div ref="BillionDataCharts" class="BillionDataCharts" :class="type" @mouseleave="mouseleave">
    <!-- 图层 -->
    <div class="layers" ref="layers" @click="clickLayers" @mousedown="mousedown">
      <!-- 图表图层 -->
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
      <!-- 辅助线图层 -->
      <splitLineLayer
        :xData="xData"
        :solidLineGap="solidLineGap"
        :dottedLineGap="dottedLineGap"
        :layerWidth="layerWidth"
      ></splitLineLayer>
      <!-- tooltip图层 -->
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
    <!-- 通道信息 -->
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
      // x 轴数据
      type: Array,
      default() {
        return []
      },
    },
    yData: {
      // y轴数据
      type: Array,
      default() {
        return []
      },
    },
    lines: {
      // 通道配置
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
    contrastDateIdx: {
      // 对比日期索引
      type: Number,
      default: 0,
    },
    solidLineGap: {
      // 实现辅助线间隔
      type: Number,
      default: 100,
    },
    dottedLineGap: {
      // 虚线辅助线间隔
      type: Number,
      default: 20,
    },
    type: {
      type: String,
      default: 'default',
    },
    events: {
      // 禁用和接受的事件列表,暂无用
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    mousePercent() {
      // 当前鼠标位于图层左侧的百分比
      return this.mouseX / this.layerWidth
    },
    mouseIdx() {
      // 当前鼠标位置的x轴下标
      return Math.round(this.xData.length * this.mousePercent)
    },
    minTop() {
      let n = 0
      return this.heights.map((item) => {
        n += item ?? 100
        return -(n - item ?? 100)
      })
    },
  },
  data() {
    return {
      tops: [], // 每个通道的偏移值,默认 0
      heights: [], //每个通道的高度,默认 100
      layerWidth: null, //图层的宽度
      layerHeight: null, // 图层的高度
      mouseX: -1000, // 鼠标位于图层左侧的距离
      mouseY: -1000, // 鼠标位于图层上侧的距离
      clientX: -1000, // 鼠标位于窗口左侧的距离
      clientY: -1000, // 鼠标位于窗口上侧的距离
      dragArr: [], // 拖动通道信息的时候,拖动的是高度还是位置
      dragType: '',
      dragIdx: -1, // 拖动的通道的索引
      start: 0, // 开始拖动的位置
      init: 0, // 当前通道开始拖动的初始数值
      dragging: false, // 是否正在拖动图层中,用来计算框选和x轴测量
      dragStartX: 0, // 框选拖动开始的 x
      dragStartY: 0, // 框选拖动开始的 y
      dragStartIdx: -1, // 框选拖动开始的 x 索引
    }
  },
  methods: {
    initCharts(idx) {
      // 调用初始化图表
      this.$refs.charts.initCharts(idx)
    },
    resizeCharts() {
      // 调用重置图表
      this.$refs.charts.resizeCharts()
    },
    dblclickInfo(idx) {
      // 双击通道信息透传
      this.$emit('dblclickInfo', idx)
    },
    getWrapperWidth() {
      // 获取图层宽高,nextTick是因为需要先处理图表渲染后获取
      this.layerWidth = utils.getStyle(this.$refs.layers, 'width')
      this.$nextTick(() => {
        this.layerHeight = utils.getStyle(this.$refs.layers, 'height')
      })
    },
    mousedown() {
      // 鼠标在图层按下的时候,更改拖动状态,记录数据
      this.dragging = true
      this.dragStartX = this.mouseX
      this.dragStartY = this.mouseY
      this.dragStartIdx = this.mouseIdx
    },
    mousemove(e) {
      // 鼠标移动的时候,实时计算当前鼠标距离图层左上角的位置
      this.mouseX = utils.getTargetMouseX(e, this.$refs.BillionDataCharts)
      this.mouseY = utils.getTargetMouseY(e, this.$refs.BillionDataCharts)
      this.clientX = e.clientX
      this.clientY = e.clientY

      // 如果正在拖动通道信息,更新当前通道的实时状态
      if (this.dragArr) this.dragItem()
    },
    mouseleave() {
      // 出界以后重置鼠标位置
      this.mouseX = -10000
    },
    mouseup(e) {
      // 鼠标抬起的时候,如果更新了通道设置,重新初始化通道
      if (this.dragArr) this.initCharts(this.dragIdx)
      this.dragArr = null

      //  如果框选了图层,计算开始点,结束点,设计的通道信息
      if (this.dragging) {
        const yArr = []
        let t = 0
        const minY = Math.min(this.mouseY, this.dragStartY)
        const maxY = Math.max(this.mouseY, this.dragStartY)
        this.lines.forEach((item, idx) => {
          const nowYtop = t + (this.tops[idx] || 0)
          const nowYbottom = nowYtop + (this.heights[idx] || 100)
          /**
           *  三种状态界定是否跟当前通道相关
           *  1. 当前通道上边在拖动范围内
           *  2. 当前通道下边在拖动范围内
           *  3. 拖动范围在当前通道上下边内部
           */
          if (
            (nowYtop >= minY && nowYtop <= maxY) ||
            (nowYbottom >= minY && nowYbottom <= maxY) ||
            (minY >= nowYtop && maxY <= nowYbottom)
          ) {
            yArr.push(idx)
          }
          t += this.heights[idx] || 100
        })
        this.$emit('selection', {
          startX: this.dragStartX, // 开始的 x 位置
          startY: this.dragStartY, // 开始的 y 位置
          endX: this.mouseX, // 结束的 x 位置
          endY: this.mouseY, // 结束的 y 位置
          startIdx: this.dragStartIdx, // 开始的索引
          endIdx: this.mouseIdx, // 结束的索引
          yArr, // 涉及的通道数据
          event: e, // 事件对象,外界需要判断功能键
        })
        this.dragging = false
      }
    },
    dragInfo(type, idx, e) {
      // 如果当前拖动的通道信息的位置,判断要改变高度还是位置
      this.dragArr = type === 'height' ? this.heights : this.tops
      this.dragIdx = idx
      this.start = e.clientY
      this.init = this.dragArr[idx] || (type === 'height' ? 100 : 0)
      this.dragType = type
    },
    dragItem() {
      // 更新拖动通道的数据
      let tar = this.init + this.clientY - this.start
      if (this.dragType === 'top') {
        tar = Math.max(this.minTop[this.dragIdx], tar)
      }
      this.$set(this.dragArr, this.dragIdx, tar)
      this.getWrapperWidth()
    },
    clickLayers() {
      // 点击了图层,判断点击的索引和涉及的通道
      if (this.events.clickLayers === false) return
      const arr = []
      let t = 0

      // 这计算比较简单,只要当前点击的点在通道范围内即可
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
      // 右击了通道信息
      this.$emit('contextmenuInfo', this.yData[idx])
    },
    scroll(e) {
      console.log('yzf', e)
    },
  },
  watch: {
    lines: {
      deep: true,
      immediate: true,
      handler(n) {
        this.heights = new Array(n.length).fill(100)
        this.tops = new Array(n.length).fill(0)
      },
    },
  },
  mounted() {
    // 统一处理公共事件
    window.addEventListener('mousemove', this.mousemove)
    window.addEventListener('mouseup', this.mouseup)
    window.addEventListener('resize', this.getWrapperWidth)
    this.$nextTick(() => {
      this.getWrapperWidth()
    })
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.mousemove)
    window.removeEventListener('mouseup', this.mouseup)
    window.removeEventListener('resize', this.getWrapperWidth)
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

  &.style1 {
    .infos {
      order: -1;
      .infoLayer {
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
