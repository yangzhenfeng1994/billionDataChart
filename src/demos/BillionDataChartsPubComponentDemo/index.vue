<template>
  <div class="monitorChart">
    <!-- 通道设置 -->
    <lines
      title="管理自定义通道"
      :lines="lines"
      :show="settings.showLines"
      @change="getYdataMethod"
    ></lines>

    <!-- 日期设置 -->
    <dates
      title="管理日期和颜色"
      :dates="dates"
      :show="settings.showDates"
      :contrastDateId="contrastDateId"
      @change="getYdataMethod"
      @changeContrastDate="contrastDateId = $event"
    ></dates>
    <div class="charts">
      <!-- 图标上方的工具栏 -->
      <settting
        :data="settings"
        @sure="initCharts"
        @resize="resize"
        @jump="jump"
        @play="play"
      ></settting>

      <!-- 图表组件本体 -->
      <charts
        ref="charts"
        :xData="xData"
        :yData="yData"
        :lines="selectedLines"
        :dates="selectedDates"
        :type="settings.chartType"
        :contrastDateIdx="contrastDateIdx"
        :startPercent="startPercent"
        :endPercent="endPercent"
        :wrapperWidth="wrapperWidth"
        :sampling="'lttd'"
        @dblclickInfo="dblclickInfo"
        @clickLayers="clickLayers"
        @contextmenuInfo="contextmenuInfo"
        @selection="selection"
      ></charts>

      <!-- 设置单个通道弹窗,双击通道信息触发 -->
      <setMaxModal
        v-if="setLineOptionIdx !== -1"
        :value="lineOption"
        @close="setLineOptionIdx = -1"
        @sure="setLineOption"
      ></setMaxModal>

      <!-- y 轴测量弹窗,点击图表触发 -->
      <clickYmodal
        v-if="showModal === 1"
        :value="showModalInfo"
        @close="showModal = 0"
      ></clickYmodal>

      <!-- 右键信息弹窗,点击通道信息然后右键触发 -->
      <contextmenuModal
        v-if="showModal === 2"
        :value="showModalInfo"
        @close="showModal = 0"
      ></contextmenuModal>

      <!-- x 轴测量弹窗, 拖动图表触发 -->
      <selectionXmodal
        v-if="showModal === 3"
        :value="showModalInfo"
        @close="showModal = 0"
      ></selectionXmodal>

      <!-- 划块选择弹窗,按下command拖动图表触发 -->
      <selectionBlockModal
        v-if="showModal === 4"
        :value="showModalInfo"
        @close="showModal = 0"
      ></selectionBlockModal>
    </div>
  </div>
</template>

<script>
import lines from './components/lines.vue'
import dates from './components/dates.vue'
import settting from './components/setting.vue'
import setMaxModal from './components/setMaxModal'
import clickYmodal from './components/clickYmodal'
import contextmenuModal from './components/contextmenuModal'
import selectionXmodal from './components/selectionXmodal'
import selectionBlockModal from './components/selectionBlockModal'

import charts from '@/components/BillionDataChartsPubComponent'

import { getLines, getDates, getXdata, getYdata, getFaultData } from '@/apis/analysisChartApi'
export default {
  name: 'monitorChart',
  components: {
    lines,
    dates,
    settting,
    charts,
    setMaxModal,
    clickYmodal,
    contextmenuModal,
    selectionXmodal,
    selectionBlockModal,
  },
  data() {
    return {
      lines: [], // 通道数据
      dates: [], // 日历数据
      xData: [], // x 轴数据
      yData: [], // y 轴数据
      faultData: [], // 缺陷数据
      defaultPercent: 1, // 默认展示的百分比
      // 工具栏的设置
      settings: {
        showLines: true, // 是否展示通道列表
        showDates: true, // 是否展示日期列表
        center: 10, // 要跳转的目标中心点
        scale: 1, // 缩放比例
        now: 50, // 当前中心点
        receiveClick: false, // 图表监听点击事件还是拖动事件
        chartType: 'default',
      },
      wrapperWidth: 2000, // 图表部分的宽度,用来计算采样率
      setLineOptionIdx: -1, // 双击通道信息设置通道的时候,双击的通道索引
      contrastDateId: '', // 对比的日期,图表里需要这个处理对比的一些功能
      showModal: 0, // 展示弹窗的类型,除了设置通道以外其他的弹窗都通过这处理
      showModalInfo: {}, // 展示弹窗的数据,弹窗内需要这些数据渲染一些表格,图表之类的
    }
  },
  computed: {
    selectedLines() {
      // 要展示的通道
      return this.lines.filter((item) => item.show)
    },
    selectedDates() {
      // 要展示的日期
      return this.dates.filter((item) => item.show)
    },
    showPercent() {
      // 要展示的百分比 = 默认 1 倍的时候展示的百分比 * 倍数
      return this.defaultPercent * this.settings.scale
    },
    startPercent() {
      // 开始的百分比 = 当前展示中心 - 要展示的百分比 / 2,最小也就是 0,最大应该是 100 - 要展示的百分比
      return Math.max(this.settings.now - this.showPercent / 2, 0)
    },
    endPercent() {
      // 结束的百分比 = 开始的百分比 + 要展示的百分比
      return this.startPercent + this.showPercent
    },
    lineOption() {
      // 获取一下当前修改的通道配置,方便后续使用
      return this.lines[this.setLineOptionIdx]
    },
    contrastDateIdx() {
      // 获取当前对比的日期的索引,方便后续使用
      return this.dates.findIndex((item) => item.id === this.contrastDateId)
    },
  },
  methods: {
    init() {
      // 初始化获取数据和图表尺寸
      const lines = getLines().then((res) => {
        this.lines = res
      })
      const dates = getDates().then((res) => {
        this.dates = res
        this.contrastDateId = this.dates[0].id
      })
      const xData = getXdata().then((res) => {
        this.xData = res
      })
      // 根据选择的通道和日期获取数据和故障数据
      Promise.all([lines, dates, xData]).then(() => {
        this.getYdataMethod()
        this.getFaultDataMethod()
      })
      this.$nextTick(() => {
        const chartsDom = document.querySelector('.chartLayer')
        const style = chartsDom.getBoundingClientRect()
        const width = style.width
        this.wrapperWidth = width
      })
    },
    initCharts() {
      // 初始化图表,这考虑到 watch 监听数据变化消耗内存太大了,采用手动触发的形式
      this.$nextTick(() => {
        this.$refs.charts.initCharts()
      })
    },
    getYdataMethod() {
      // 获取y轴数据
      getYdata({
        lines: this.selectedLines.map((item) => item.id),
        dates: this.selectedDates.map((item) => item.id),
      }).then((res) => {
        this.yData = res
        this.initCharts()
      })
    },
    getFaultDataMethod() {
      // 获取故障数据
      getFaultData({
        lines: this.selectedLines.map((item) => item.id),
        dates: this.selectedDates.map((item) => item.id),
      }).then((res) => {
        this.faultData = res
      })
    },
    resize() {
      // 拖动窗口重置图表尺寸
      this.$nextTick(() => {
        this.$refs.charts.resizeCharts()
      })
    },
    play() {
      // 播放图表的时候从 0 - 100 更新数据
      let speed = 100
      let step = 1
      let n = 0
      var fn = () => {
        n += step
        this.settings.now = n
        this.initCharts()
        if (n < 100) {
          setTimeout(() => {
            fn()
          }, speed)
        }
      }
      fn()
    },
    jump() {
      // 跳转中心点
      this.settings.now = this.settings.center * 1
      this.initCharts()
    },
    dblclickInfo(idx) {
      // 图标内双击了通道信息,打开通道设置弹窗
      this.setLineOptionIdx = idx
    },
    setLineOption(target) {
      // 修改通道设置后,更改配置数据,有的属性不需要同步到配置数据中
      const line = this.lines[this.setLineOptionIdx]
      let num = 0
      const needMergeField = ['max', 'min', 'x', 'reverse']
      needMergeField.forEach((field) => {
        this.$set(line, field, field !== 'reverse' ? target[field] * 1 : target[field])
        num++
      })

      // 如果有修改,更新当前通道图表
      if (num) {
        this.$nextTick(() => {
          this.$refs.charts.initCharts(this.setLineOptionIdx)
          this.setLineOptionIdx = -1
        })
      }
    },
    clickLayers(xIdx, yArr, filterXdata, filterYdata) {
      // 如果监听拖动事件直接返回不处理
      if (!this.settings.receiveClick) return false
      // 点击图层,业务上为测量y轴数据,打开弹窗,处理数据,接受参数为(点击的 x 轴的下标, 点击包含的通道索引)
      if (!yArr.length) return
      this.showModalInfo = {
        lines: this.lines.filter((item, idx) => yArr.includes(idx)),
        xData: filterXdata[xIdx],
        yDatas: filterYdata
          .filter((item, idx) => yArr.includes(idx))
          .map((item) => item.map((child) => child[xIdx])),
      }
      this.showModal = 1
    },
    contextmenuInfo(arr) {
      // 右键通道信息,业务上为打开查看当前通道弹窗
      this.showModal = 2
      this.showModalInfo = arr
    },
    selection(data) {
      console.log('yzf', data)
      // 如果监听点击事件直接返回不处理
      if (this.settings.receiveClick) return false
      // 滑动选择通道,需要判断是否按了command 按键,按了就是框选,不按就是 x 轴测量,打开对应的弹窗
      const { startIdx, endIdx, yArr, event, filterXdata, filterYdata } = data
      this.showModal = event.metaKey ? 4 : 3
      if (event.metaKey) {
        // 划块的
        this.showModalInfo = {
          xData: filterXdata.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)),
          yData: filterYdata
            .filter((item, idx) => yArr.includes(idx))
            .map((item) =>
              item.map((child) =>
                child.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx))
              )
            ),
        }
      } else {
        // x 轴的
        this.showModalInfo = {
          xData: filterXdata.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)),
          yData: filterYdata.map((item) =>
            item.map((child) => child.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)))
          ),
        }
      }
    },
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
.monitorChart {
  height: 100%;
  display: flex;
  & > div {
    flex: 0 0 auto;
  }
  .charts {
    flex: 1 1 10px;
    width: 10px;
    display: flex;
    flex-direction: column;
  }
}
</style>
