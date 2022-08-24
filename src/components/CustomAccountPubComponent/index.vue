<template>
  <div class="CustomAcount">123</div>
</template>

<script>
export default {
  name: 'CustomAccountPubComponent',
  props: {
    type: {
      type: String,
      default: 'custom',
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
    option: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped></style>
