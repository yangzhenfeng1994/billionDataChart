<template>
  <div class="modalLayer" v-show="mouseX && mouseX < layerWidth">
    <!-- 红线 -->
    <div class="line" :style="{ left: mouseX + 'px' }"></div>
    <!-- 弹窗 -->
    <div class="modal" :style="modalStyle">
      <div class="row" v-for="(row, idx) in showDatas" idx :key="idx">
        <div class="label">
          {{ lines[idx].label }}
        </div>
        <div class="item" v-for="(item, itemIdx) in row" :key="itemIdx">
          <div class="cir" :style="{ background: dates[itemIdx]?.color }"></div>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modalLayer',
  props: {
    lines: {
      // 通道数据
      type: Array,
      default() {
        return []
      },
    },
    mouseX: {
      // 鼠标 x 的位置,用来确定线和弹窗的位置
      type: Number,
      default: -1000,
    },
    mouseY: {
      // 鼠标 y 的位置,用来确定弹窗的位置
      type: Number,
      default: -1000,
    },
    yData: {
      //y 数据
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
      // 对比日期的索引
      type: Number,
      default: -1,
    },
    mouseIdx: {
      // 鼠标当前的索引
      type: Number,
      default: -1,
    },
    layerWidth: {
      // 图层宽度,用来处理弹窗越界
      type: Number,
      default: 1000,
    },
    layerHeight: {
      // 图层高度,用来处理弹窗越界
      type: Number,
      default: 0,
    },
  },
  computed: {
    modalX() {
      // 计算当前弹窗 x 的位置,控制越界情况
      return Math.min(this.mouseX + 8, this.layerWidth - this.modalWidth - 8)
    },
    modalY() {
      // 计算当前弹窗 y 的位置,控制越界情况
      return Math.min(this.mouseY + 8, this.layerHeight - this.modalHeight - 8)
    },
    modalStyle() {
      // 当前弹窗的样式
      return {
        left: this.modalX + 'px',
        top: this.modalY + 'px',
        width: this.modalWidth + 'px',
        height: this.modalHeight + 'px',
      }
    },
    showDatas() {
      // 当前展示的数据
      return this.yData.map((item) => item.map((chi) => chi[this.mouseIdx]))
    },
  },
  data() {
    return {
      modalHeight: 240, // 弹窗高度
      modalWidth: 200, // 弹窗宽度
    }
  },
}
</script>

<style lang="less" scoped>
.modalLayer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  .line {
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: red;
  }
  .modal {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    padding: 8px;
    .row {
      display: flex;
      .item {
        display: flex;
        align-items: center;
        margin-left: 8px;
        .cir {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
