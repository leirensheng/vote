<template>
  <div class="detail">
    <div class="top">
      <div class="left">
        <div class="index">{{ showIndex  }}</div>
        <div classs="title">
          <div class="firstRow">{{ item.detailFirstRow || item.firstRow }}</div>
          <div class="secondRow">
            {{ item.detailSecondRow || item.secondRow }}
          </div>
        </div>
      </div>
      <img
        :src="url&&require(`@/assets/firstCate/${url}`)"
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
              :src="one.url && require('@/'+one.url)"
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
import { setCacheData } from '@/utils/cache'
export default {
  data () {
    return {
      desc: '（本投票栏支持多选 请选择下拉至底部点击投票）',
      item: {},
      items,
      // index: 0,
      url: ''
    }
  },
  props: {
    showIndex: {
      type: String,
      default: '99'
    }
  },
  computed: {
    originIndex () {
      const val = this.showIndex.indexOf('0') === 0 ? this.showIndex.slice(1) : this.showIndex
      return val - 1
    }
  },
  watch: {
    showIndex: {
      immediate: true,
      handler (val) {
        const item = this.items[this.originIndex]
        item.children.forEach((one, i) => {
          one.isChecked = false
          one.url = `assets/secondCate/${item.detailFirstRow || item.firstRow}/${
        i + 1
      }.png`
        })
        this.item = item
        this.url = (item.firstRow === '家具及建筑' ? '5-1' : (Number(this.originIndex) + 1)) + '.png'
      }
    }
  },

  methods: {
    async submit () {
      try {
        const ids = this.item.children.filter((one) => one.isChecked).map(one => one.id)
        const { msg } = await send({ categoryIdList: ids })
        this.$notify({ type: 'success', message: msg })
        setCacheData('id' + this.item.id, true)
        this.$emit('close', true)
      } catch (e) {
        this.$emit('close', false)
        console.log(e)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$itemHeight: 2.1rem;
.detail {
  background-color: rgb(217, 219, 242);
  padding: 0 12px;
  padding-top: 2px;
  display: flex;
  flex-direction: column;

  .top {
    height: 8.21rem;
    margin-bottom: 0.714rem;
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
      right: -1rem;
      // top: -7px;
      width: 8.29rem;
      height: 8.29rem;
    }
  }
  .desc {
    color: rgb(78, 90, 206);
    font-family: oppo;
    font-size: 0.9rem;
    margin-bottom: 1.429rem;
  }
  .content {
    flex:1;
    overflow: auto;
    margin-bottom: 1.43rem;
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
        margin-bottom: 0.86rem;
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
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }
}
</style>
