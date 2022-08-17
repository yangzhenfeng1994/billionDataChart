<template>
  <div class="infoLayer">
    <!-- 通道信息展示 -->
    <div
      class="item"
      v-for="(item, idx) in lines"
      :class="{ selected: selectedLine === item }"
      :key="item.id"
      :style="{ top: (styles.tops[idx] || 0) + 'px', height: (styles.heights[idx] || 100) + 'px' }"
      @click="select(item, idx)"
      @dblclick="dblClick(idx)"
      @contextmenu="contextmenu($event, item, idx)"
    >
      <div class="name">
        {{ item.label }}
      </div>
      <div class="number">
        <!-- 对比数据 -->
        <div class="contrastData">
          {{ yData[idx]?.[contrastDateIdx]?.[mouseIdx] }}
        </div>

        <!-- 最新日期的数据 -->
        <div class="newData">
          {{ yData[idx]?.[yData[idx].length - 1]?.[mouseIdx] }}
        </div>
      </div>
      <div class="dragHeightBar">
        <!-- 拖动更改高度 -->
        <div class="bar" @mousedown="drag('height', idx, $event)"></div>
      </div>
      <div class="dragTopBar">
        <!-- 拖动更改位置 -->
        <div class="bar" @mousedown="drag('top', idx, $event)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoLayer',
  props: {
    lines: {
      // 通道数据
      type: Array,
      default() {
        return []
      },
    },
    yData: {
      // y 轴数据
      type: Array,
      default() {
        return []
      },
    },
    styles: {
      // 样式数据,通道高度和位置
      type: Object,
      default() {
        return {
          tops: [],
          heights: [],
        }
      },
    },
    contrastDateIdx: {
      // 对比的日期的索引
      type: Number,
      default: 0,
    },
    mouseIdx: {
      // 鼠标当前 X 轴的索引
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedLine: null, // 当前单击选择的通道
    }
  },
  methods: {
    dblClick(idx) {
      // 双击事件透传
      this.$emit('dblclick', idx)
    },
    drag(type, idx, e) {
      // 拖动事件
      this.$emit('drag', type, idx, e)
    },
    select(item) {
      // 点击选择一个通道
      this.selectedLine = item
    },
    contextmenu(e, item, idx) {
      // 选择的通道截取右击事件透传,非选择的正常右击
      if (this.selectedLine !== item) return
      e.preventDefault()
      this.$emit('contextmenu', item, idx)
    },
  },
}
</script>

<style lang="less" scoped>
.infoLayer {
  position: relative;
  padding: 0 4px;
  user-select: none;
  .item {
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #e9e9e9;
    transition: 0.2s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      .bar {
        opacity: 1;
      }
    }
    &.selected {
      background: #fff;
    }
    .number {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
      .contrastData {
        color: #2fbe72;
      }
      .newData {
        color: #1a21ee;
      }
    }
    .bar {
      transition: 0.2s;
      opacity: 0;
    }
    .dragHeightBar {
      position: absolute;
      bottom: 0;
      height: 4px;
      width: 100%;
      display: flex;
      justify-content: center;
      .bar {
        width: 40px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        cursor: s-resize;
      }
    }
    .dragTopBar {
      position: absolute;
      right: 0;
      width: 4px;
      height: 100%;
      display: flex;
      align-items: center;
      .bar {
        height: 40px;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 2px;
        cursor: ns-resize;
      }
    }
  }
}
</style>
