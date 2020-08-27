<template>
  <div class="detail">
    <div class="top" >
      <div class="left">
        <div class="index">{{ index }}</div>
        <div classs="title">
          <div class="firstRow">{{ item.detailFirstRow || item.firstRow }}</div>
          <div class="secondRow">
            {{ item.detailSecondRow || item.secondRow }}
          </div>
        </div>
      </div>
      <img :src="url" class="right" alt="" />
    </div>
    <div class="desc">{{ desc }}</div>
    <div class="content">
      <div class="item" v-for="one in item.children" :key="one.name">
        <div class="left">
          <input type="checkbox" v-model="one.isChecked" />
        </div>
        <div class="right">
          <div class="name">{{ one.name }}</div>
          <img  :src="require('@/'+one.url)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import items from './detail'
export default {
  data () {
    return {
      desc: '（本投票栏支持多选 请选择下拉至底部点击投票）',
      item: {},
      index: 0,
      url: ''
    }
  },
  mounted () {
    const { firstRow, index, url } = this.$route.query
    const item = items.find(one => one.firstRow === firstRow)
    item.children.forEach((one, i) => {
      one.isChecked = false
      one.url = `assets/secondCate/${item.detailFirstRow || item.firstRow}/${i + 1}.png`
    })
    this.item = item
    this.index = index
    this.url = url
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.detail {
  background-color: rgb(217, 219, 242);
  padding: 30px 20px;
  min-height: 100%;
  .top {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    position: relative;
    // justify-content: space-between;
    .left {
      padding-bottom: 1rem;
      align-self: flex-end;
      font-size: 2.57rem;
      line-height: 2.57rem;
      color: rgb(63, 71, 154);
      font-family: youse;
      position: relative;
      .firstRow,
      .secondRow {
        z-index: 3;
        position: relative;
      }
      .index {
        position: absolute;
        bottom: 3rem;
        left: 0.5rem;
        z-index: 1;
        font-size: 8.57rem;
        color: rgb(237, 177, 189);
        font-family: RubiBoldItalic;
      }
    }
    .right {
      position: absolute;
      right:0;
      top:-1rem;
      width: 8.29rem;
      height: 8.29rem;
    }
  }
  .desc {
    color: rgb(78, 90, 206);
    font-family: oppo;
    margin-bottom: 1.429rem;
  }
  .content {
    margin-bottom: 20px;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .left {
        input{
          width: 2.143rem;
          height: 2.143rem;
        }
      }
      .right {
        margin-left: 0.6rem;
        padding: 0 0.63rem;
        flex: 1;
          height: 2.143rem;
        border-radius: 6px;
        background-color: rgb(83, 95, 207);
        display: flex;
        font-family: oppo;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3rem;
        .name {
          color: white;
        }
        img{
          height: 2.143rem;
          width: 2.143rem;
        }
      }
    }
  }
}
</style>
