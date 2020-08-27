<template>
  <div
    class="home"
  >
    <img src="@/assets/bg_top.png" alt="" class="xinfeng">
    <img :style="girlStyle" class="girl" src="@/assets/girl.png" alt="">
    <div class="title" :style="titleStyle">2021年上海市产品质量监督抽查产品调查问卷</div>
    <div class="content" :style="contentStyle">
      <div class="box" :style="boxStyle" v-for="(one,index) in items" :key="one.title"
      @click="gotoDetail(one,index)"
      >
        <div class="top">
          <div class="cate">
            <div>{{one.firstRow}}</div>
            <div>{{one.secondRow}}</div>
          </div>
          <div class="index" :style="indexStyle">{{getIndex(index+1)}}</div>
        </div>
        <div class="bottom">
          <img :src="one.url" alt="" :style="imgStyle">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import bg from '@/assets/bg_top.png'
export default {
  name: 'Home',
  data () {
    return {
      items: [
        { firstRow: '文教体育用品', secondRow: '' },
        { firstRow: '家用电器', secondRow: '及电器附件' },
        { firstRow: '电子及信息', secondRow: '技术产品' },
        { firstRow: '儿童用品', secondRow: '' },
        { firstRow: '家具及建筑', secondRow: '装饰装修材料' },
        { firstRow: '服装鞋帽', secondRow: '及家用纺织品' },
        { firstRow: '交通工具', secondRow: '及相关产品' },
        { firstRow: '食品', secondRow: '相关产品' },
        { firstRow: '日用杂品', secondRow: '' },
        { firstRow: '其他类产品', secondRow: '' }
      ],
      bg,
      width: 375,
      height: 172,
      windowWidth: '',
      windowHeight: '',

      girl: {
        right: 2,
        top: 109,
        width: 132
      },
      title: {
        top: 55,
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
        width: 108
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
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
          index,
          firstRow: one.firstRow,
          url: one.url
        }
      })
    },
    getIndex (val) {
      if (val < 10) {
        return '0' + val
      }
      return val
    },
    handleResize () {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
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
        fontSize: this.ratio * 16 + 'px'
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
  background-repeat:no-repeat;
  background-color:rgb(63, 71, 154);
  padding-bottom: 10px;
   .xinfeng{
     width: 100%;
   }
  .girl{
    position: absolute;
    z-index: 2;
  }
  .title{
    position: absolute;
    color: rgb(226, 128, 148);
    font-family: youse;
  }
  .content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 10px;
    // position: absolute;
    background-color: rgb(83, 95, 207);
    .box{
      border-radius: 5px;
      background-color: rgb(222, 224, 237);
      border-right: 10px;
      // width: 32%;
      margin-top: 6px;
      padding: 2px 2px 2px 5px;
      display: flex;
      flex-direction: column;
      .top{
        flex: 0 0;
        position: relative;
         .cate{
           font-family: oppo;
           color:rgb(63, 72, 154);
          //  font-weight: bold;
         }
        .index{
          position: absolute;
          right:0;
          top:0;
          color: white;
          font-family: RubiBoldItalic;
        }
      }
      .bottom{
         flex:1 1;
         overflow: auto;
         display: flex;
         justify-content: center;
         .img{
          //  height: 95%;
          //  background-size: contain;
        //  background-repeat: no-repeat;
         }
      }
    }
  }
}
</style>
