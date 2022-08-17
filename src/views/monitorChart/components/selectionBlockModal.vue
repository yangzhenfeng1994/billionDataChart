<template>
  <el-dialog title="划块放大" :visible="true" width="30%" :before-close="close">
    <div class="item" v-for="(item, idx) in value" :key="idx">
      {{ item }}
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'selectionBlockModal',
  props: {
    value: {
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
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="less" scoped></style>
