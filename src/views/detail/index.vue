<template>
  <div class="detail">
    <div class="top">
      <div class="left">
        <div class="index">{{ index }}</div>
        <div classs="title">
          <div class="firstRow">{{ item.detailFirstRow || item.firstRow }}</div>
          <div class="secondRow">
            {{ item.detailSecondRow || item.secondRow }}
          </div>
        </div>
      </div>
      <img
        :src="url"
        class="right"
        alt=""
      />
    </div>
    <div class="desc">{{ desc }}</div>
    <div class="content">
      <div class="items">
        <div
          class="item"
          v-for="one in item.children"
          :key="one.name"
        >
          <input
            class="left"
            type="checkbox"
            :id="one.name"
            v-model="one.isChecked"
          />
          <label
            class="right"
            :for="one.name"
          >
            <div class="name">{{ one.name }}</div>
            <img
              :src="require('@/'+one.url)"
              alt=""
            >
          </label>
        </div>
      </div>

      <div
        class="submit"
        @click="submit"
      ><span>提交</span></div>

    </div>

  </div>
</template>
<script>
import items from './detail'
import { send } from '@/api/detail'
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
    const item = items.find((one) => one.firstRow === firstRow)
    item.children.forEach((one, i) => {
      one.isChecked = false
      one.url = `assets/secondCate/${item.detailFirstRow || item.firstRow}/${
        i + 1
      }.png`
    })
    this.item = item
    this.index = index
    this.url = url
  },
  methods: {
    async submit () {
      console.log(this.item.children.filter((one) => one.isChecked))
      await send()
      this.$notify({ type: 'success', message: '提交成功' })
    }
  }
}
</script>
<style lang="scss" scoped>
$itemHeight: 2.1rem;
.detail {
  background-color: rgb(217, 219, 242);
  padding: 0 20px;
  padding-top: 2px;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .top {
    height: 115px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    position: relative;
    .left {
      padding-bottom: 10px;
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
        bottom: 32px;
        left: -0.4rem;
        z-index: 1;
        font-size: 7.8rem;
        color: rgb(237, 177, 189);
        font-family: RubiBoldItalic;
      }
    }
    .right {
      position: absolute;
      right: 0;
      // top: -7px;
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
    flex:1;
    overflow: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .items {
      flex:1;
      overflow: auto;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        .left {
          width: $itemHeight;
          height: $itemHeight;
          border: none;
        }
        .right {
          margin-left: 0.6rem;
          padding: 0 0.63rem;
          flex: 1;
          height: $itemHeight;
          border-radius: 6px;
          background-color: rgb(83, 95, 207);
          display: flex;
          font-family: oppo;
          justify-content: space-between;
          align-items: center;
          font-size: 1.12rem;
          .name {
            color: white;
          }
          img {
            height: $itemHeight;
            width: $itemHeight;
          }
        }
      }
    }
    .submit {
      font-family: oppo;
      color: white;
      background-color: rgb(227, 128, 148);
      border-radius: 4px;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
