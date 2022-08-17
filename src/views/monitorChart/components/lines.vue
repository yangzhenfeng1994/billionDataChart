<template>
  <div class="lines" v-show="show">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div class="item" v-for="(line, idx) in lines" :key="line.id">
        <el-checkbox v-model="line.show" @change="change">{{ line.label }} </el-checkbox>
        <div class="btns">
          <i class="el-icon-caret-top" v-if="idx !== 0" @click="up(idx)"></i>
          <i class="el-icon-caret-bottom" v-if="idx !== lines.length - 1" @click="down(idx)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lines',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    lines: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {}
  },
  methods: {
    change() {
      const tar = this.lines.filter((item) => item.show)
      this.$emit('change', tar)
    },
    up(idx) {
      // 更换位置
      const source = this.lines.splice(idx, 1)
      this.lines.splice(idx - 1, 0, source[0])
    },
    down(idx) {
      // 更换位置
      const source = this.lines.splice(idx, 1)
      this.lines.splice(idx + 1, 0, source[0])
    },
  },
}
</script>

<style lang="less" scoped>
.lines {
  width: 140px;
  padding: 4px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;

  .title {
    background: #9ad59a;
    padding: 0px 8px;
    text-align: center;
    font-weight: 700;
    line-height: 30px;
    flex: 0 0 auto;
  }

  .content {
    padding: 8px;
    flex: 1 1 auto;
    overflow: auto;

    .item {
      display: flex;
      justify-content: space-between;
    }

    .btns {
      i {
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
