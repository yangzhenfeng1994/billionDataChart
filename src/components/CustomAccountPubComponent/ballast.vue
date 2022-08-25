<template>
  <div :style="style" @click="$emit('click')">
    <div class="ballast" :style="ballastStyle">
      <div class="l">
        <span>
          {{ data.start }}
        </span>
      </div>
      <div class="center"></div>
      <div class="r">
        <span>
          {{ data.end }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ballast',
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
    ballastStyle() {
      return {
        width: (this.data.end - this.data.start) * this.singleMeterrPx + 'px',
      }
    },
  },
}
</script>

<style lang="less" scoped>
.ballast {
  width: max-content;
  bottom: 50%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  transform: translateY(50%);
  align-items: center;
  height: 40px;
  background: #fff;
  & > div {
    height: 100%;
  }
  .l {
    border-left: 1px solid #000;
    writing-mode: vertical-rl;
  }
  .r {
    border-right: 1px solid #000;
    writing-mode: vertical-rl;
  }
  .center {
    flex: 1 1 auto;
    background: red;
  }
}
</style>
