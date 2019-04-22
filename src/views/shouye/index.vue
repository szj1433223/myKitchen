<template>
  <div class="home">
    <!-- 头部 -->
    <header>
      <div class="logo">
        <img src="img/logo.png" alt>
      </div>
      <div class="city">
        <a href="#">请填写地址</a>
        <span>
          <img src="img/icon.png" alt>
        </span>
      </div>
      <div></div>
      <div class="search">
        <img src="img/search-icon.png">
      </div>
    </header>

    <!-- Con -->
    <div id="con">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            <img :src="item">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- nav -->
      <nav class="nav">
        <ul class="nav-list" v-for="(item,key) in navs" :key="key">
          <li v-for="(val,index) in item" :key="index">
            <a href="#">
              <img :src="val" alt>
            </a>
          </li>
        </ul>
      </nav>
      <!-- 滚动scroll -->
      <div class="goods-list">
        <div class="scroll-logo">
          <img src="" alt="">
        </div>
        <ul class="scroll">
          <li></li>
          <li></li>
        </ul>
        <div class="jiantou">
          <img src="" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shouye",
  components: {},
  data() {
    return {
      imgs: [
        "img/lb.jpg",
        "img/lb1.jpg",
        "img/lb.jpg",
        "img/lb1.jpg",
        "img/lb.jpg"
      ],
      navs: [
        ["img/f.jpg", "img/f.jpg", "img/f.jpg", "img/f.jpg"],
        ["img/f.jpg", "img/f.jpg", "img/f.jpg", "img/f.jpg"]
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        //自动滚动
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style>
header {
  height: 0.9rem;
  width: 100%;
  line-height: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.logo img {
  height: 70%;
  width: 70%;
}
.city {
  display: flex;
  font-size: 0.3rem;
  width: 28%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #1f6117;
}
/* 轮播 */
.swiper-container {
  width: 100%;
  height: 3.32rem;
}

.swiper-container img {
  width: 100%;
  height: 100%;
}
/* nav */
nav {
  width: 100%;
}
.nav-list {
  width: 100%;
  height: 2.18rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
