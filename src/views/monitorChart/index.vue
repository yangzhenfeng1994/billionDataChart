<template>
  <div class="monitorChart">
    <lines
      title="管理自定义通道"
      :lines="lines"
      :show="settings.showLines"
      @change="getYdataMethod"
    ></lines>
    <dates
      title="管理日期和颜色"
      :dates="dates"
      :show="settings.showDates"
      :contrastDateId="contrastDateId"
      @change="getYdataMethod"
      @changeContrastDate="contrastDateId = $event"
    ></dates>
    <div class="charts">
      <settting
        :data="settings"
        @sure="initCharts"
        @resize="resize"
        @jump="jump"
        @play="play"
      ></settting>
      <charts
        ref="charts"
        :xData="filterXdata"
        :yData="filterYdata"
        :lines="selectedLines"
        :dates="selectedDates"
        :contrastDateIdx="contrastDateIdx"
        @dblclickInfo="dblclickInfo"
        @clickLayers="clickLayers"
        @contextmenuInfo="contextmenuInfo"
        @selection="selection"
      ></charts>
      <setMaxModal
        v-if="setLineOptionIdx !== -1"
        :value="lineOption"
        @close="setLineOptionIdx = -1"
        @sure="setLineOption"
      ></setMaxModal>
      <clickYmodal
        v-if="showModal === 1"
        :value="showModalInfo"
        @close="showModal = 0"
      ></clickYmodal>
      <contextmenuModal
        v-if="showModal === 2"
        :value="showModalInfo"
        @close="showModal = 0"
      ></contextmenuModal>
      <selectionXmodal
        v-if="showModal === 3"
        :value="showModalInfo"
        @close="showModal = 0"
      ></selectionXmodal>
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
      lines: [],
      dates: [],
      xData: [],
      yData: [],
      faultData: [],
      defaultPercent: 1,
      settings: {
        showLines: true,
        showDates: true,
        center: 10,
        scale: 1,
        now: 50,
      },
      wrapperWidth: 2000,
      setLineOptionIdx: -1,
      contrastDateId: '',
      showModal: 0,
      showModalInfo: {},
    }
  },
  computed: {
    selectedLines() {
      return this.lines.filter((item) => item.show)
    },
    selectedDates() {
      return this.dates.filter((item) => item.show)
    },
    showPercent() {
      return this.defaultPercent * this.settings.scale
    },
    startPercent() {
      return Math.max(this.settings.now - this.showPercent / 2, 0)
    },
    endPercent() {
      return this.startPercent + this.showPercent
    },
    dataLength() {
      return this.xData.length
    },
    windowXdata() {
      const length = this.dataLength
      const data = this.xData.slice(
        ~~((length * this.startPercent) / 100),
        ~~((length * this.endPercent) / 100)
      )
      return data
    },
    windowYdata() {
      const length = this.dataLength
      return this.yData.map((item, idx) => {
        const translate = this.lines[idx]?.x || 0
        const lineSliceStart = Math.min(
          100 - this.showPercent,
          Math.max(0, this.startPercent + translate)
        )
        const lineSliceEnd = Math.min(100, Math.max(this.showPercent, this.endPercent + translate))
        return item.map((child) => {
          const sliceStart = ~~((length * lineSliceStart) / 100)
          const sliceEnd = ~~((length * lineSliceEnd) / 100)
          return child.slice(sliceStart, sliceEnd)
        })
      })
    },
    samplingRate() {
      return Math.max(1, ((this.xData.length / 100) * this.showPercent) / this.wrapperWidth)
    },
    filterXdata() {
      const rate = this.samplingRate
      const data = this.windowXdata
      const res = []
      for (let i = 0; i < data.length; i += rate) {
        const arr = data.slice(i, i + rate)
        res.push(Math.max(...arr))
      }
      return res
    },
    filterYdata() {
      const rate = this.samplingRate
      const data = this.windowYdata
      return data.map((item) => {
        return item.map((child) => {
          const res = []
          for (let i = 0; i < child.length; i += rate) {
            const arr = child.slice(i, i + rate)
            res.push(Math.max(...arr))
          }
          return res
        })
      })
    },
    lineOption() {
      return this.lines[this.setLineOptionIdx]
    },
    contrastDateIdx() {
      return this.dates.findIndex((item) => item.id === this.contrastDateId)
    },
  },
  methods: {
    init() {
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
      this.$nextTick(() => {
        this.$refs.charts.initCharts()
      })
    },
    getYdataMethod() {
      getYdata({
        lines: this.selectedLines.map((item) => item.id),
        dates: this.selectedDates.map((item) => item.id),
      }).then((res) => {
        this.yData = res
        this.initCharts()
      })
    },
    getFaultDataMethod() {
      getFaultData({
        lines: this.selectedLines.map((item) => item.id),
        dates: this.selectedDates.map((item) => item.id),
      }).then((res) => {
        this.faultData = res
      })
    },
    resize() {
      this.$nextTick(() => {
        this.$refs.charts.resizeCharts()
      })
    },
    play() {
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
      this.settings.now = this.settings.center * 1
      this.initCharts()
    },
    dblclickInfo(idx) {
      this.setLineOptionIdx = idx
    },
    setLineOption(target) {
      const line = this.lines[this.setLineOptionIdx]
      let num = 0
      const needMergeField = ['max', 'min', 'x', 'reverse']
      needMergeField.forEach((field) => {
        this.$set(line, field, field !== 'reverse' ? target[field] * 1 : target[field])
        num++
      })
      if (num) {
        this.$nextTick(() => {
          this.$refs.charts.initCharts(this.setLineOptionIdx)
          this.setLineOptionIdx = -1
        })
      }
    },
    clickLayers(xIdx, yArr) {
      if (!yArr.length) return
      this.showModalInfo = {
        lines: this.lines.filter((item, idx) => yArr.includes(idx)),
        xData: this.filterXdata[xIdx],
        yDatas: this.filterYdata
          .filter((item, idx) => yArr.includes(idx))
          .map((item) => item.map((child) => child[xIdx])),
      }
      this.showModal = 1
    },
    contextmenuInfo(arr) {
      this.showModal = 2
      this.showModalInfo = arr
    },
    selection(data) {
      const { startIdx, endIdx, yArr, event } = data
      this.showModal = event.metaKey ? 4 : 3
      if (event.metaKey) {
        // 划块的
        this.showModalInfo = {
          xData: this.filterXdata.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)),
          yData: this.filterYdata
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
          xData: this.filterXdata.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)),
          yData: this.filterYdata.map((item) =>
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
