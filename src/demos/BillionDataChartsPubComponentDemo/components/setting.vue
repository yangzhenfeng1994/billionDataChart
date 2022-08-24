<template>
  <div class="settings">
    <div class="item">
      <el-button @click="sure">重绘</el-button>
    </div>
    <div class="item">
      <el-checkbox v-model="data.showLines" @change="resize">通道列表</el-checkbox>
      <el-checkbox v-model="data.showDates" @change="resize">日期列表</el-checkbox>
    </div>
    <div class="item">
      <el-switch v-model="data.receiveClick" active-text="点击" inactive-text="拖动"> </el-switch>
    </div>
    <div class="item scale">
      <el-select v-model="data.chartType">
        <el-option :value="'default'">default</el-option>
        <el-option :value="'style1'">style1</el-option>
      </el-select>
    </div>
    <div class="item">
      <el-button @click="play">播放</el-button>
    </div>
    <div class="item">
      跳转里程:
      <el-input v-model="data.center" placeholder="里程" @change="$emit('jump')"></el-input>
    </div>
    <div class="item grow">
      <el-slider v-model="data.now" @change="sure"></el-slider>
    </div>
    <div class="item scale">
      <el-select v-model="data.scale" @change="sure">
        <el-option :value="1">1x</el-option>
        <el-option :value="2">2x</el-option>
        <el-option :value="4">4x</el-option>
        <el-option :value="5">5x</el-option>
        <el-option :value="10">10x</el-option>
        <el-option :value="20">20x</el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    sure() {
      this.$emit('sure')
    },
    resize() {
      this.$emit('resize')
    },
    play() {
      this.$emit('play')
    },
  },
}
</script>

<style lang="less" scoped>
.settings {
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid #eeeeee;
  .item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    &.grow {
      flex: 1 1 auto;
      & > * {
        width: 100%;
      }
    }
    &.scale {
      width: 100px;
    }
    .el-input {
      width: 60px;
    }
    .el-select {
      // width: 60px;
    }
  }
}
</style>
