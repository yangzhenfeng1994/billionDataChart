<template>
  <div class="dates" v-show="show">
    <div class="title">{{ title }}</div>
    <div class="contrast">
      <div class="label">比较日期:</div>
      <el-select :value="contrastDateId" size="small" @change="changeContrastDate">
        <el-option v-for="date in dates" :key="date.id" :value="date.id" :label="date.label">
        </el-option>
      </el-select>
    </div>
    <div class="content">
      <div class="item" v-for="date in dates" :key="date.id">
        <el-checkbox v-model="date.show" @change="change">{{ date.label }}</el-checkbox>
        <el-color-picker v-model="date.color" @change="change"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dates',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    dates: {
      type: Array,
      default() {
        return []
      },
    },
    title: {
      type: String,
      default: '标题',
    },
    contrastDateId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    change() {
      const tar = this.dates.filter((item) => item.show)
      this.$emit('change', tar)
    },
    changeContrastDate(e) {
      this.$emit('changeContrastDate', e)
    },
  },
}
</script>

<style lang="less" scoped>
.dates {
  width: 160px;
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
  .contrast {
    // text-align: center;
    margin: 4px 0;
    .el-input {
      margin-top: 2px;
    }
  }
  .content {
    padding: 8px;
    flex: 1 1 auto;
    overflow: auto;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-color-picker {
        width: 25px;
        height: 25px;
        margin-left: 4px;
        & /deep/ .el-color-picker__trigger {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
