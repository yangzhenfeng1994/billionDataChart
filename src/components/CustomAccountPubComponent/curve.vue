<template>
  <div :style="style">
    <div class="curve" :style="curveStyle" :class="data.l ? 'left' : 'right'">
      <div class="chart">
        <div class="start">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-zhexian1"></use>
          </svg>
        </div>
        <div class="line"></div>
        <div class="end">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-zhexian2"></use>
          </svg>
        </div>
      </div>
      <div class="desc">
        <div class="lr">{{ data.l ? 'L' : 'R' }}= {{ data.l || data.r }}</div>
        <div class="startMileage">
          {{ data.startMileage }}
        </div>
        <div class="endMileage">
          {{ data.endMileage }}
        </div>
        <div class="i">I:{{ data.i }}</div>
        <div class="height">H:{{ data.height }}</div>
        <div class="length">L:{{ data.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'curve',
  props: {
    data: {
      type: Object,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return {
          start: 0,
          end: 100,
        }
      },
    },
    singleMeterrPx: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    style() {
      return {
        left: (this.data.start - this.options.start) * this.singleMeterrPx + 'px',
      }
    },
    curveStyle() {
      return {
        width: (this.data.end - this.data.start) * this.singleMeterrPx + 'px',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.curve {
  width: max-content;
  bottom: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
  align-items: center;
  background: #fff;
  border-top: 2px dashed black;
  justify-content: center;
  .chart {
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    bottom: 0;
    transform: translateY(2px);
    .start,
    .end {
      flex: 0 0 auto;
    }
    .line {
      flex: 1 1 auto;
      width: 10px;
      border-top: 1px solid #000;
      transform: translateY(5.5px);
    }
  }
  .desc {
    position: absolute;
    top: calc(100% + 10px);
    width: max-content;
    background: #fff;
    & > div {
      color: #59c2f7;
      font-size: 12px;
      &.lr {
        color: #000;
        font-size: 14px;
      }
    }
  }
  &.right {
    .chart {
      bottom: auto;
      top: 0;
      transform: translateY(-4px) rotateX(180deg);
    }
    .desc {
      display: flex;
      flex-direction: column;
      bottom: calc(100% + 10px);
      top: auto;
      .lr {
        order: 1;
      }
    }
  }
}
</style>
