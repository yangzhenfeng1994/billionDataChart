<template>
  <div class="customAccountDemo">
    <div class="description">
      <div class="title">自制台账</div>
      <div class="item">
        <el-slider v-model="range" range show-stops :max="max"> </el-slider>
      </div>
      <div class="item">
        <el-button @click="play">play</el-button>
        是否展示线:
        <el-switch v-model="options.line"></el-switch>
        对齐方式:
        <el-select v-model="options.alignItems">
          <el-option :value="'top'">top</el-option>
          <el-option :value="'center'">center</el-option>
          <el-option :value="'bottom'">bottom</el-option>
        </el-select>
      </div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="option in types" :key="option.value" :label="option.value">{{
          option.label
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="componentsWrap">
      <div class="component">
        <customAccount :options="options" :data="filterData"></customAccount>
      </div>
    </div>
  </div>
</template>

<script>
import customAccount from '@/components/CustomAccountPubComponent/index'
import data from '@/mocks/customAccount/index.js'
export default {
  name: 'customAccountDemo',
  components: {
    customAccount,
  },
  data() {
    return {
      range: [600, 700],
      checkList: ['station', 'bridge', 'tunnel', 'switch', 'curve', 'culvert', 'ballast'],
      max: 1000,
      types: [
        {
          label: '车站',
          value: 'station',
        },
        {
          label: '桥梁',
          value: 'bridge',
        },
        {
          label: '隧道',
          value: 'tunnel',
        },
        {
          label: '涵渠',
          value: 'culvert',
        },
        {
          label: '线路纵面',
          value: 'line',
        },
        {
          label: '曲线',
          value: 'curve',
        },
        {
          label: '有砟道床',
          value: 'ballast',
        },
        {
          label: '轨道板 1 型',
          value: 'trackPlate1',
        },
        {
          label: '轨道板 2 型',
          value: 'trackPlate2',
        },
        {
          label: '轨道板 3 型',
          value: 'trackPlate3',
        },
        {
          label: '道岔',
          value: 'switch',
        },
        {
          label: '断链',
          value: 'brokenChain',
        },
      ],
      options: {
        start: 0,
        end: 100,
        alignItems: 'center',
        line: true,
      },
      data: [],
    }
  },
  computed: {
    checkedType() {
      return this.checkList.reduce((l, i) => (l[i] = true && l), {})
    },
    filterData() {
      return data.filter((item) => this.checkedType[item.type])
    },
  },
  methods: {
    play() {
      const gap = this.options.end - this.options.start
      this.options.start = 0
      this.options.end = gap
      let speed = 20
      let step = 1
      var fn = () => {
        this.options.start += step
        this.options.end = Math.min(this.options.end + step, this.max)
        this.range = [this.options.start, this.options.end]
        if (this.options.end < this.max) {
          setTimeout(() => {
            fn()
          }, speed)
        }
      }
      fn()
      this.start = 0
    },
  },
  watch: {
    range: {
      immediate: true,
      deep: true,
      handler(n) {
        this.options.start = n[0]
        this.options.end = n[1]
      },
    },
  },
}
</script>

<style lang="less" scoped>
.customAccountDemo {
  display: flex;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: column;

  .description {
    // width: 100px;
    // border-right: 1px solid #000;
    padding: 20px;
  }
  .componentsWrap {
    flex: 1 1 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .component {
      width: 100%;
      height: 300px;
      margin: auto;
      background: #fff;
    }
  }
}
</style>
