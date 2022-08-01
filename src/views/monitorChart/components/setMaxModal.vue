<template>
  <el-dialog title="请设置当前通道属性" :visible="true" width="30%" :before-close="close">
    <div class="item">
      <div class="label">最大值:</div>
      <el-input v-model="setObject.max"></el-input>
    </div>
    <div class="item">
      <div class="label">最小值:</div>
      <el-input v-model="setObject.min"></el-input>
    </div>
    <div class="item">
      <div class="label">x偏移值:</div>
      <el-input v-model="setObject.x"></el-input>
    </div>
    <div class="item">
      <div class="label">翻转:</div>
      <el-checkbox v-model="setObject.reverse"></el-checkbox>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'setMaxModal',
  props: {
    value: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      setObject: 0,
    }
  },
  methods: {
    sure() {
      this.$emit('sure', this.setObject)
    },
    close() {
      this.$emit('close')
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(n) {
        this.setObject = JSON.parse(JSON.stringify(n))
        if (!this.setObject.max) this.$set(this.setObject, 'max', 20)
        if (!this.setObject.min) this.$set(this.setObject, 'min', 0)
        if (!this.setObject.x) this.$set(this.setObject, 'x', 0)
        if (!this.setObject.reverse) this.$set(this.setObject, 'reverse', false)
      },
    },
  },
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  & + .item {
    margin-top: 8px;
  }
  .label {
    width: 100px;
    flex: 0 0 100px;
  }
}
</style>
