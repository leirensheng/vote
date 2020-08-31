<template>
  <div class="home">
    <img
      src="@/assets/bg_top.png"
      alt=""
      class="xinfeng"
    >
    <img
      class="girl"
      src="@/assets/girl.png"
      alt=""
    >
    <div class="title">2021年上海市产品质量监督抽查产品调查问卷</div>
    <div class="content">
      <div
        class="box-row"
        v-for="(row,rowIndex) in rows"
        :key="rowIndex"
      >
        <div
          class="box"
          v-for="(one,index) in row.items"
          :key="one.title"
          @click.stop="gotoDetail(one,index,rowIndex)"
        >
          <div class="top">
            <div class="cate">
              <div>{{one.firstRow}}</div>
              <div>{{one.secondRow}}</div>
            </div>
            <div class="index">{{getShowIndex(rowIndex,index)}}</div>
          </div>
          <div
            class="bottom"
            :style="{backgroundImage: `url(${one.url})`} "
          >
          </div>
        </div>
        <div
          class="box-detail"
          :style="{height: row.height,margin: row.margin}"
        >
          <cate-detail
           v-if="row.isRenderDetail"
            :showIndex="detail.showIndex"
          ></cate-detail>
        </div>

          <div class="desc" v-if="rowIndex === rows.length-1">
        <div class="row">注：</div>
        <div class="row">1. 本次投票为多选，如建议其他产品，请给我们留言吧。</div>
        <div class="row">2. 征集时间截止至2020年X年X日</div>
      </div>
      </div>

    </div>
  </div>

</template>

<script>
import bg from '@/assets/bg_top.png'
import CateDetail from '../detail/index.vue'
import items from '../detail/detail.js'
export default {
  name: 'Category',
  components: {
    CateDetail
  },
  data () {
    return {
      detail: {
        showIndex: '99'
      },
      items,
      rows: {},
      bg,
      curDetailId: '',
      curShowRow: -1
    }
  },

  mounted () {
    this.items = this.items.map((one, index) => ({
      ...one,
      url: require('@/assets/firstCate/' + (index + 1) + '.png')
    }))
    this.getRows()
  },
  methods: {
    getRows () {
      const map = []
      let cur = 0
      this.items.forEach((one, index) => {
        cur = Math.floor(index / 3)
        if (!map[cur]) {
          map[cur] = {
            isShowDetail: false,
            isRenderDetail: false,
            height: 0,
            items: []
          }
        }
        map[cur].items.push(one)
      })
      this.rows = map
    },

    getDetailHeight (length) {
      const rem = 8.21 + 0.714 + 1.429 + 0.9 + 1.43 + (0.86 + 2.1) * length + 2
      return `calc(${rem}rem + 2px)`
    },
    gotoDetail (one, index, rowIndex) {
      const children = one.children
      const isToClose = this.curDetailId === one.id
      this.rows[rowIndex].isRenderDetail = true
      const preRenderRow = this.curShowRow
      this.curShowRow = rowIndex
      if (preRenderRow !== this.curShowRow) {
        setTimeout(() => {
          this.rows[preRenderRow] && (this.rows[preRenderRow].isRenderDetail = false)
        }, 600)
      }

      this.curDetailId = one.id
      this.rows.forEach((row, i) => {
        const isCurRow = Number(rowIndex) === i
        row.height = isCurRow && !isToClose ? this.getDetailHeight(children.length) : 0
        row.margin = row.height ? '1rem 0' : '0'
      })
      this.detail.showIndex = this.getShowIndex(rowIndex, index)
    },

    getShowIndex (rowIndex, index) {
      const val = (rowIndex) * 3 + index + 1
      if (val < 10) {
        return '0' + val
      }
      return String(val)
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
    right: 0.157rem;
    width: 11rem;
    top: 7rem;
    z-index: 2;
  }
  .title {
    position: absolute;
    color: rgb(226, 128, 148);
    font-family: youse;
    left: 2.85rem;
    right: 2.85rem;
    font-size: 2.08rem;
    line-height: 2rem;
    top: 4.57rem;
  }
  .content {
    position: relative;
    padding-bottom: 0.714rem !important;
    border-radius: 0 0 16px 16px; // position: absolute;
    background-color: rgb(83, 95, 207);
    margin: -0.29rem 1rem 0;
    padding: 2rem 0.5rem;
    font-size: 1rem;
    .box-row {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .box {
        border-radius: 5px;
        background-color: rgb(222, 224, 237);
        border-right: 10px;
        // width: 32%;
        margin-top: 0.43rem;
        padding: 2px 4px 2px 3px;
        display: flex;
        flex-direction: column;
        width: 7.57rem;
        height: 7.57rem;
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
            font-size: 1.1rem;
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
      .box-detail {
        width: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        background: white;
        height: 0;
      }
    }

    .desc {
      width: 65%;
      position: absolute;
      top: 2.57rem;
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
