<template>
<div class="detail">
  <div class="top">
    <div class="left">
       <div class="index">{{index}}</div>
      <div class="firstRow">{{item.detailFirstRow||item.firstRow}}</div>
      <div class="secondRow">{{item.detailSecondRow||item.secondRow}}</div>
    </div>
    <img :src="url" class="right" alt="">
  </div>
  <div class="desc">{{desc}}</div>
  <div class="content" >
    <div class="item" v-for="one in item.children" :key="one.name">
      <div class="left">
      <checkbox></checkbox>
    </div>
    <div class="right">
      <div class="name">{{one.name}}</div>
      <!-- <img src="" alt=""> -->
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
      desc: '本投票栏支持多选 请选择下拉至底部点击投票',
      item: null,
      index: 0
    }
  },
  mounted () {
    const { firstRow, index, url } = this.$route.query
    this.item = items.find(one => one.firstRow === firstRow)
    this.index = index
    this.url = url
  }
}
</script>
<style lang="scss" scoped>
.detail{
  background-color: rgb(217, 219, 242);
  padding: 30px 20px;
  min-height: 100%;
  .top{
    margin-bottom: 24px;
    display: flex;
      justify-content: space-between;
    .left{
      .index{
        color: white;
      }

    }
    .right{

    }
  }
  .desc{
    color: rgb(78, 90, 206);
  }
  .content{
    margin-bottom: 20px;
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{

      }
      .right{
        background-color: rgb(83, 95, 207);
        display: flex;
      justify-content: space-between;
      align-items: center;
        .name{
          color: white;
        }

      }
    }
  }
}
</style>
