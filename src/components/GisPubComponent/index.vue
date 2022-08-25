<template>
  <div class="Gis">
    <div ref="map"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
export default {
  name: 'GisPubComponent',
  data() {
    return {}
  },
  methods: {
    init() {
      loadModules(['esri/config', 'esri/views/MapView'], function (esriConfig, Map, MapView) {})
    },
  },
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://js.arcgis.com/3.41/'
    document.body.appendChild(script)
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://js.arcgis.com/3.41/esri/css/esri.css'
    script.onload = this.init
  },
}
</script>

<style lang="less" scoped></style>
