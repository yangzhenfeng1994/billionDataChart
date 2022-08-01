<template>
  <div class="billionDataChartsDemo">
    <div class="description">
      <div class="title">大数据量的波形图组件说明</div>
      <div class="text"></div>
    </div>
    <div class="componentsWrap">
      <BillionDataCharts :data="data"></BillionDataCharts>
    </div>
  </div>
</template>

<script>
import BillionDataCharts from '../components/BillionDataCharts/index.vue'
import data from '../mocks/billionDataCharts/index'

export default {
  name: 'billionDataChartsDemo',
  components: { BillionDataCharts },
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    this.data = data
  },
}
</script>

<style lang="less" scoped>
.billionDataChartsDemo {
  display: flex;
  width: 100%;
  height: 100%;
  .description {
    width: 200px;
    border-right: 1px solid #000;
  }
  .componentsWrap {
    flex: 1 1 10px;
  }
}
</style>
