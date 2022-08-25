<template>
  <div class="gisDemo">
    <div class="description">
      <div class="title">地图</div>
    </div>
    <div class="componentsWrap">
      <div class="component">
        <Gis></Gis>
      </div>
    </div>
  </div>
</template>

<script>
import Gis from '@/components/GisPubComponent/index.vue'
export default {
  name: 'gisDemo',
  components: {
    Gis,
  },
  data() {
    return {}
  },
  mounted() {
    // 折线 散点 柱状
    const quest = ['line1', 'line2', 'line3']
    const response = [
      { type: 'line', data: [] },
      { type: 'dotted', data: [] },
      { type: 'bar', data: [] },
    ]
  },
}
</script>

<style lang="less" scoped></style>
