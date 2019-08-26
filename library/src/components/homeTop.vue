<template>
  <div class="grey">
    <div class="container">
      <div class="row">
        <div class="top-swiper-news">
          <div class="news-main">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in sliders" :key="index">
                <img :src="item.img" alt="">
              </swiper-slide>
              <div class="swiper-pagination swiper-pagination-bullets"  slot="pagination"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </div>
          <div class="news-aside">
            <img src="../../static/images/a-1.jpg" alt="">
            <img src="../../static/images/a-2.jpg" alt="">
          </div>
        </div>
        <div class="quick-entrance">
          <ul>
            <li v-for="(item,index) in entrance" :key="index" :style="'backgroundColor:'+item.color">
              <div>
                <span>{{item.cn}}</span>
                <span class="enEntrance">{{item.en}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let sliders = [
  {
    img: '@/../static/images/s-1.jpg'
  },
  {
    img: '@/../static/images/s-2.jpg'
  },
  {
    img: '@/../static/images/s-3.jpg'
  },
  {
    img: '@/../static/images/s-4.jpg'
  }
]
let entrance = [
  {
    cn: '新闻公告', en: 'Library News', color: '#5c7bc8'
  },
  {
    cn: '服务指南', en: 'Guidenlines', color: '#5390d7'
  },
  {
    cn: '在线指南', en: 'Onlinke Q&A', color: '#42a8dd'
  },
  {
    cn: '已借图书', en: 'Borrowed Book', color: '#64c1cf'
  },
  {
    cn: '我的活动', en: 'Guidenlines', color: '#5dc9a8'
  }
]
export default {
  data () {
    return {
      sliders,
      entrance,
      swiperOption: {
        autoplay: true,
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
.my-bullet{
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  opacity: .2;
  background: #fff;
  width: 16px;
  height: 16px;
  margin: 8px 5px 5px;
  span:0 5px
}
.my-bullet-active{
  opacity: 1;
}
</style>

<style scoped>
.grey{
  background-color: #f0f3f6;
}
.row{
  padding: 10px 0px;
}
.swiper-container img{
  width: 100%;
}
.news-aside img{
  width: 100%;
  overflow: hidden;
}
.row{
  margin-right: -15px;
  margin-left: -15px;
}
.top-swiper-news{
  display: block;
  width: 100%;
  height: 420px;
  overflow: hidden;
  position: relative;
}
.swiper-container{
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  height: 100%;
}
.swiper-pagination{
  position: absolute;
  bottom: 0!important;
  width: 100%;
  background: rgba(0,0,0,.6);
  height: 35px;
}
.news-main{
  display: inline-block;
  float: left;
  width: 66%;
  height: 420px;
  padding: 0 5px;
  overflow: hidden;
}
.news-aside{
  float: left;
  width: 33%;
  height: 420px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.quick-entrance{
  width: 100%;
}
.quick-entrance ul{
  list-style: none;
  padding-top: 15px;
  padding-left: 5px;
  padding-right: 0px;
  margin: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.quick-entrance li{
  height: 100px;
  font-size: 18px;
  opacity: .8;
  color: #fff;
  width: 19%;
  display: table;
}
.quick-entrance div{
  vertical-align: middle;
  display: table-cell;
}
.quick-entrance span{
  display: block;
}
.enEntrance{
  padding-top: 2px;
  font-size: 10px;
  opacity: .5;
}
</style>
