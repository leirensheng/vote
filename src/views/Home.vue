<template>
  <div class="home">
    <div class="top">
      <div class="rotate">
        <img
          class="gear"
          src="@/assets/home/gear.png"
          alt=""
        >
        <div class="year">2021</div>
      </div>

      <div class="title-1 title">抽查哪些产品？</div>
    </div>
    <div class="title-wrap">
      <div class="title-2 title">用你的小手手投票一下</div>
    </div>
    <div class="desc">
      <p
        v-for="one in articles"
        :key="one"
        v-html="one"
      ></p>
    </div>
    <div class="btn-wrap">
      <div
        class="btn"
        @click="jump"
      >点击这里开启<img
          class="hand"
          src="@/assets/home/hand.png"
          alt=""
        /></div>

    </div>
    <div class="bottom">
      <img
        class="light"
        src="@/assets/home/light.png"
        alt=""
      >
      <img
        class="bg"
        src="@/assets/home/bottom.png"
        alt=""
      >
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({ name: 'Category' })
    }
  },
  data () {
    return {
      articles: [
        '移动电源？电压力锅？手机？笔记本电脑？热水器？儿童服装？<span class="article-hight">这些产品的质量安全如何，能放心使用吗？</span>',
        '为进一步提高本市产品质量监督抽查工作质量，<span class="article-orange">科学制定《2021年上海市产品质量监督抽查计划》</span>，上海市市场监督管理局现面向社会公开征集意见和建议。',
        '您想我们接下来的一年抽查哪些产品呢？请在下列产品列表里勾选您关注的产品种类，感谢您的参与哦！'
      ]
    }
  }
}
</script>
<style lang="scss">
.article-hight {
  font-family: oppo;
}
.article-orange {
  font-family: oppo;
  color: rgb(244, 178, 45);
}
</style>
<style lang="scss" scoped>
.home {
  min-height: 100%;
  background-color: rgb(62, 71, 154);
  position: relative;
  // paddin
  .top {
    margin-left: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .rotate {
      position: relative;
      .gear {
        width: 6.5rem;
        height: 6.5rem;
        transform-origin: 50% 50%;
        animation: rotate 10s linear infinite;
      }
      .year {
        transform: translate(-50%, -50%) rotate(-10deg);
        left: 50%;
        top: 50%;
        z-index: 6;
        font-size: 1.4rem;
        font-family: RubiBoldItalic;
        // top:
        position: absolute;
        color: white;
      }
    }

    .title-1 {
      position: relative;
      top: -0.6rem;
      font-size: 3rem;
    }
  }

  .title {
    font-family: youse;
    color: white;
    text-shadow: -0.15em 0em 0em rgb(28, 35, 124);
  }
  .btn-wrap {
    z-index: 88;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    .btn {
      font-family: youse;
      line-height: 3rem;
      font-size: 2rem;
      padding: 0 4rem;
      background-color: rgb(227, 128, 148);
      color: white;
      text-shadow: none;
      border-radius: 0.8rem;
      box-shadow: 0em 0.15em 0em rgb(87, 98, 205),
        -0.2em 0.15em 0em rgb(28, 35, 124);
      position: relative;
      .hand {
        z-index: 3;
        position: absolute;
        left: 0rem;
        width: 2.8rem;
        top: 2.3rem;
        animation: handChange 2s linear infinite;
      }
    }
  }
  .title-wrap {
    position: relative;
    top: -10px;
    .title-2 {
      position: relative;
      font-size: 2.6rem;
      text-align: center;
    }
  }

  .desc {
    position: relative;
    z-index: 2;
    background-color: rgb(83, 95, 207);
    border-radius: 8px;
    margin: 5px 1rem 0 1rem;
    color: white;
    font-family: oppol;
    padding: 18px 8px;
    p {
      text-indent: 2rem;
      font-size: 1rem;
      text-align: justify;
      margin-bottom: 0.3rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .bottom {
    z-index: 1;
    position: relative;
    .bg {
      width: 100%;
      position: relative;
      top: -15px;
    }
    .light {
      z-index: 2;
      bottom: 6rem;
      left: 2.3rem;
      position: absolute;
      width: 60%;
      opacity: 0.1;
      animation: movelight 6s linear infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes handChange {
    0% {
      transform: scale(1);
    }
    44% {
      transform: scale(1);
    }
    47% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    53% {
      transform: scale(1.2);
    }
    56% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes movelight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(80%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
</style>
