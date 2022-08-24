<template>
  <div class="customAccountDemo">
    <div class="description">
      <div class="title">自制台账</div>
      <div class="text"></div>
    </div>
    <div class="componentsWrap">
      <customAccount></customAccount>
    </div>
  </div>
</template>

<script>
import customAccount from '@/components/CustomAccountPubComponent/index'
export default {
  name: 'customAccountDemo',
  components: {
    customAccount,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped></style>
