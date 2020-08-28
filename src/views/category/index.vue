<template>
  <div class="home">
    <img
      src="@/assets/bg_top.png"
      alt=""
      class="xinfeng"
    >
    <img
      :style="girlStyle"
      class="girl"
      src="@/assets/girl.png"
      alt=""
    >
    <div
      class="title"
      :style="titleStyle"
    >2021年上海市产品质量监督抽查产品调查问卷</div>
    <div
      class="content"
      :style="contentStyle"
    >
      <div
        class="box"
        :style="boxStyle"
        v-for="(one,index) in items"
        :key="one.title"
        @click="gotoDetail(one,index)"
      >
        <div class="top">
          <div class="cate">
            <div>{{one.firstRow}}</div>
            <div>{{one.secondRow}}</div>
          </div>
          <div
            class="index"
            :style="indexStyle"
          >{{getIndex(index+1)}}</div>
        </div>
        <div
          class="bottom"
          :style="{backgroundImage: `url(${one.url})`} "
        >
        </div>
      </div>

      <div class="desc">
        <div class="row">注：</div>
        <div class="row">1. 本次投票为多选，如建议其他产品，请给我们留言吧。</div>
        <div class="row">2. 征集时间截止至2020年X年X日</div>
      </div>
    </div>
  </div>

</template>

<script>
import bg from '@/assets/bg_top.png'
import items from '../detail/detail.js'
export default {
  name: 'Home',
  props: {
    windowWidth: {
      type: Number,
      default: 0
    },
    windowHeight: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      items,
      bg,
      width: 375,
      height: 172,

      girl: {
        right: 2,
        top: 105,
        width: 147
      },
      title: {
        top: 64,
        left: 40,
        width: 324 - 48,
        fontSize: 29
      },
      content: {
        left: 21,
        right: 21,
        top: 190,
        fontSize: 14
      },
      box: {
        width: 106
      }
    }
  },

  mounted () {
    this.items = this.items.map((one, index) => ({
      ...one,
      url: require('@/assets/firstCate/' + (index + 1) + '.png')
    }))
  },
  methods: {
    gotoDetail (one, index) {
      this.$router.push({
        path: '/detail',
        query: {
          index: this.getIndex(index + 1),
          firstRow: one.firstRow,
          url:
            one.firstRow === '家具及建筑'
              ? require('@/assets/firstCate/5-1.png')
              : one.url
        }
      })
    },
    getIndex (val) {
      if (val < 10) {
        return '0' + val
      }
      return val
    }
  },
  computed: {
    ratio () {
      return this.windowWidth / this.width
    },
    girlStyle () {
      return {
        right: this.ratio * this.girl.right + 'px',
        width: this.girl.width * this.ratio + 'px',
        top: this.girl.top * this.ratio + 'px'
      }
    },
    titleStyle () {
      return {
        left: this.title.left * this.ratio + 'px',
        right: this.title.left * this.ratio + 'px',
        fontSize: this.title.fontSize * this.ratio + 'px',
        lineHeight: this.title.fontSize * this.ratio + 'px',
        top: this.title.top * this.ratio + 'px'
      }
    },
    contentStyle () {
      const paddingTop = 24 * this.ratio
      const paddingLeft = 7 * this.ratio
      const marginLeft = 13 * this.ratio
      return {
        margin: `-4px ${marginLeft}px 0 ${marginLeft}px`,
        padding: `${paddingTop}px ${paddingLeft}px`,
        fontSize: this.content.fontSize * this.ratio + 'px'
      }
    },
    indexStyle () {
      return {
        fontSize: this.ratio * 15.5 + 'px'
      }
    },
    boxStyle () {
      return {
        width: this.box.width * this.ratio + 'px',
        height: this.box.width * this.ratio + 'px'
      }
    },
    imgStyle () {
      return {
        width: this.box.width * 0.7 * this.ratio + 'px',
        height: '100%'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100%;
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: rgb(63, 71, 154);
  padding-bottom: 0.714rem;
  .xinfeng {
    width: 100%;
  }
  .girl {
    position: absolute;
    z-index: 2;
  }
  .title {
    position: absolute;
    color: rgb(226, 128, 148);
    font-family: youse;
  }
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 0.714rem !important;
    border-radius: 0 0 16px 16px; // position: absolute;
    background-color: rgb(83, 95, 207);
    .box {
      border-radius: 5px;
      background-color: rgb(222, 224, 237);
      border-right: 10px;
      // width: 32%;
      margin-top: 0.43rem;
      padding: 2px 4px 2px 3px;
      display: flex;
      flex-direction: column;
      .top {
        flex: 0 0;
        position: relative;
        .cate {
          font-family: oppo;
          color: rgb(63, 72, 154);
          z-index: 2;
          position: relative;
        }
        .index {
          z-index: 1;
          position: absolute;
          right: 0;
          top: 0;
          color: white;
          font-family: RubiBoldItalic;
        }
      }
      .bottom {
        flex: 1 1;
        overflow: auto;
        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
    .desc {
      width: 65%;
      position: absolute;
      bottom: 10px;
      right: 0;
      color: white;
      font-size: 1rem;
      line-height: 1.3rem;
      .row {
        font-family: oppol;
      }
    }
  }
}
</style>
