<template>
  <div id="footer">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          path: "/shouye",
          icon: "&#xe624;"
        },
        {
          title: "分类",
          path: "/fenlei",
          icon: "&#xe600;"
        },
        {
          title: "购物车",
          path: "/shopcar",
          icon: "&#xe63e;"
        },
         {
          title: "我的",
          path: "/mine",
          icon: "&#xe674;"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
$color:#5d8640;

#footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    background: #fff;
    left: 0;
    bottom: 0;
    border-top:1px solid #ccc;
    
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #999;
            font-size: .27rem;
        }
    }
}

#footer>ul>.router-link-active{
    color: $color;
}
#footer>ul>li>span{
    display: block;
    text-align: center;
    padding-top: .06rem;
}
#footer>ul>li>i{
    font-size: .42rem;
    text-align: center;
}



</style>