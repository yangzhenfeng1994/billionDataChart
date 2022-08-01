<template>
  <div class="infoLayer">
    <div
      class="item"
      v-for="(item, idx) in lines"
      :key="item.id"
      :style="{ top: (styles.tops[idx] || 0) + 'px', height: (styles.heights[idx] || 100) + 'px' }"
      @dblclick="dblClick(idx)"
    >
      <div class="name">
        {{ item.label }}
      </div>
      <div class="number">
        <div class="contrastData">
          {{ yData[idx]?.[contrastDateIdx]?.[mouseIdx] }}
        </div>
        <div class="newData">
          {{ yData[idx]?.[yData[idx].length - 1]?.[mouseIdx] }}
        </div>
      </div>
      <div class="dragHeightBar">
        <div class="bar" @mousedown="drag('height', idx, $event)"></div>
      </div>
      <div class="dragTopBar">
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
      type: Array,
      default() {
        return []
      },
    },
    yData: {
      type: Array,
      default() {
        return []
      },
    },
    styles: {
      type: Object,
      default() {
        return {
          tops: [],
          heights: [],
        }
      },
    },
    contrastDateIdx: {
      type: Number,
      default: 0,
    },
    mouseIdx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  methods: {
    dblClick(idx) {
      this.$emit('dblclick', idx)
    },
    drag(type, idx, e) {
      this.$emit('drag', type, idx, e)
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
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      .bar {
        opacity: 1;
      }
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
