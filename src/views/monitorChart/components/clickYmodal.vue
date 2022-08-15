<template>
  <el-dialog title="y轴测量" :visible="true" width="30%" :before-close="close">
    {{ value }}
  </el-dialog>
</template>

<script>
export default {
  name: 'clickYmodal',
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
