<template>
  <div class="splitLineLayer">
    {{ solidArr }}
    {{ dottedArr }}
    <div class="dottedLines">
      <div class="line" v-for="line in solidArr" :key="line"></div>
    </div>
    <div class="solidLines">
      <div class="line" v-for="line in dottedArr" :key="line"></div>
    </div>
    <!-- {{ xData }} -->
  </div>
</template>

<script>
export default {
  name: 'splitLineLayer',
  props: {
    xData: {
      type: Array,
      default() {
        return []
      },
    },
    solidLineGap: {
      type: Number,
      default: 100,
    },
    dottedLineGap: {
      type: Number,
      default: 20,
    },
    layerWidth: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    start() {
      return this.xData[0]
    },
    end() {
      return this.xData[this.xData.length - 1]
    },
    all() {
      return this.end - this.start
    },
    solidArr() {
      return ~~(this.all / this.solidLineGap)
    },
    dottedArr() {
      return ~~(this.all / this.dottedLineGap)
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.splitLineLayer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .line {
      height: 100%;
      width: 0;
    }
  }
  .dottedLines {
    .line {
      border-right: 1px solid #000;
    }
  }
  .solidLines {
    .line {
      border-right: 1px dotted #000;
    }
  }
}
</style>
