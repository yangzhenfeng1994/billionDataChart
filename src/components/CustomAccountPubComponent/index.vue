<template>
  <div class="CustomAcount" :class="options.alignItems" ref="wrapper">
    <div class="line" v-if="options.line !== false"></div>
    <template v-for="item in data">
      <station
        class="CustomAcountItem"
        v-if="item.type === 'station'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      ></station>
      <bridge
        class="CustomAcountItem"
        v-if="item.type === 'bridge'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      ></bridge>
      <tunnel
        class="CustomAcountItem"
        v-if="item.type === 'tunnel'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      ></tunnel>
      <switchComp
        class="CustomAcountItem"
        v-if="item.type === 'switch'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      >
      </switchComp>
      <curve
        class="CustomAcountItem"
        v-if="item.type === 'curve'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      >
      </curve>
      <culvert
        class="CustomAcountItem"
        v-if="item.type === 'culvert'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      ></culvert>
      <ballast
        class="CustomAcountItem"
        v-if="item.type === 'ballast'"
        :key="item.id"
        :data="item"
        :options="options"
        :singleMeterrPx="singleMeterrPx"
      ></ballast>
    </template>
  </div>
</template>

<script>
import station from './station.vue'
import bridge from './bridge.vue'
import tunnel from './tunnel.vue'
import switchComp from './switch.vue'
import curve from './curve.vue'
import culvert from './culvert.vue'
import ballast from './ballast.vue'
export default {
  name: 'CustomAccountPubComponent',
  components: {
    station,
    bridge,
    tunnel,
    switchComp,
    curve,
    culvert,
    ballast,
  },
  props: {
    data: {
      type: Array,
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
          alignItems: 'center',
        }
      },
    },
  },
  computed: {
    allLength() {
      const { start, end } = this.options
      return end - start
    },
    singleMeterrPx() {
      return this.wrapperWidth / this.allLength
    },
  },
  data() {
    return {
      wrapperWidth: 0,
      wrapperHeight: 0,
    }
  },
  methods: {
    getWrapperStyle() {
      this.$nextTick(() => {
        const dom = this.$refs.wrapper
        const style = dom.getBoundingClientRect()
        this.wrapperWidth = style.width
        this.wrapperHeight = style.height
      })
    },
  },
  mounted() {
    this.getWrapperStyle()
    window.addEventListener('resize', () => {
      this.getWrapperStyle()
    })
  },
  beforeDestroy() {
    window.removeEventListener('rezize')
  },
}
</script>

<style lang="less" scoped>
.CustomAcount {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  &.top {
    align-items: flex-start;
    .CustomAcountItem {
      bottom: 50%;
    }
  }
  &.center {
    align-items: center;
  }
  &.bottom {
    align-items: flex-end;
    .CustomAcountItem {
      top: 50%;
    }
  }
  .line {
    width: 100%;
    height: 2px;
    background: #000;
  }
  .CustomAcountItem {
    position: absolute;
    height: 100%;
    width: max-content;
    display: flex;
    align-items: center;
  }
}
</style>
