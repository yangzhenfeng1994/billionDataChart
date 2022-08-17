<template>
  <div class="splitLineLayer">
    <!-- 虚线 -->
    <div class="dottedLines">
      <div class="line" v-for="line in dottedArr" :key="line" :style="{ left: line + 'px' }"></div>
    </div>
    <!-- 实线 -->
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
      // x 数据
      type: Array,
      default() {
        return []
      },
    },
    solidLineGap: {
      // 实线间隔
      type: Number,
      default: 100,
    },
    dottedLineGap: {
      // 虚线间隔
      type: Number,
      default: 20,
    },
    layerWidth: {
      // 图层宽度
      type: Number,
      default: 0,
    },
  },
  computed: {
    start() {
      // 当前展示数据的起始位置
      return this.xData[0]
    },
    end() {
      // 当前展示数据的结束位置
      return this.xData[this.xData.length - 1]
    },
    all() {
      // 当前展示的数据的总体位置
      return this.end - this.start
    },
    singleWidth() {
      // 当前每条数据对应的像素
      return this.layerWidth / this.all
    },
    solidArr() {
      // 需要在哪些像素点渲染实线
      const arr = []
      let s = this.start + this.solidLineGap - (this.start % this.solidLineGap)
      for (let i = s; i <= this.end; i += this.solidLineGap) {
        arr.push((i - this.start) * this.singleWidth)
      }
      return arr
    },
    dottedArr() {
      // 需要在哪些像素点渲染虚线
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
