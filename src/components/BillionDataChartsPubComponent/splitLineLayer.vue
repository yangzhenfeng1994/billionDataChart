<template>
  <div class="splitLineLayer">
    <div class="dottedLines">
      <div class="line" v-for="line in dottedArr" :key="line" :style="{ left: line + 'px' }"></div>
    </div>
    <div class="solidLines">
      <div class="line" v-for="line in solidArr" :key="line" :style="{ left: line + 'px' }"></div>
    </div>
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
    singleWidth() {
      return this.layerWidth / this.all
    },
    solidArr() {
      const arr = []
      let s = this.start + this.solidLineGap - (this.start % this.solidLineGap)
      for (let i = s; i <= this.end; i += this.solidLineGap) {
        arr.push((i - this.start) * this.singleWidth)
      }
      return arr
    },
    dottedArr() {
      const arr = []
      let s = this.start + this.dottedLineGap - (this.start % this.dottedLineGap)
      for (let i = s; i <= this.end; i += this.dottedLineGap) {
        arr.push((i - this.start) * this.singleWidth)
      }
      return arr
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
    // display: flex;
    // justify-content: space-between;
    .line {
      height: 100%;
      width: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .dottedLines {
    .line {
      border-right: 1px dotted #000;
    }
  }
  .solidLines {
    .line {
      border-right: 1px solid #000;
    }
  }
}
</style>
