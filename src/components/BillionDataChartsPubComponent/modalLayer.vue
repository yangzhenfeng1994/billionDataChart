<template>
  <div class="modalLayer" v-show="mouseX && mouseX < layerWidth">
    <div class="line" :style="{ left: mouseX + 'px' }"></div>
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
      type: Array,
      default() {
        return []
      },
    },
    mouseX: {
      type: Number,
      default: -1000,
    },
    mouseY: {
      type: Number,
      default: -1000,
    },
    yData: {
      type: Array,
      default() {
        return []
      },
    },
    dates: {
      type: Array,
      default() {
        return []
      },
    },
    contrastDateIdx: {
      type: Number,
      default: -1,
    },
    mouseIdx: {
      type: Number,
      default: -1,
    },
    layerWidth: {
      type: Number,
      default: 1000,
    },
    layerHeight: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    modalX() {
      return Math.min(this.mouseX + 8, this.layerWidth - this.modalWidth - 8)
    },
    modalY() {
      return Math.min(this.mouseY + 8, this.layerHeight - this.modalHeight - 8)
    },
    modalStyle() {
      return {
        left: this.modalX + 'px',
        top: this.modalY + 'px',
        width: this.modalWidth + 'px',
        height: this.modalHeight + 'px',
      }
    },
    showDatas() {
      return this.yData.map((item) => item.map((chi) => chi[this.mouseIdx]))
    },
  },
  data() {
    return {
      modalHeight: 240,
      modalWidth: 200,
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
