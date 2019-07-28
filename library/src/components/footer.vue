<template>
  <div class="footer">
    <div  class="container padding">
      <div class="switch-info clearFix">
        <div class="title-tab">
          <ul>
            <router-link tag="li" to="#"><i></i><span :class="{active:info}" @click="changeFooter('info')">交通信息</span></router-link>
            <router-link tag="li" to="#"><i></i><span :class="{active:time}" @click="changeFooter('time')">开馆时间</span></router-link>
            <router-link tag="li" to="#"><i></i><span :class="{active:link}" @click="changeFooter('link')">友情链接</span></router-link>
            <router-link tag="li" to="#"><i></i><span :class="{active:about}" @click="changeFooter('about')">关于我们</span></router-link>
          </ul>
        </div>
        <div class="tab-content">
          <ul v-show="info">
            <li>地址：上海市淮海中路1555号</li>
            <li>邮编：200031</li>
            <li>电话：021-64455555*2000或5000</li>
            <li>传真：021-64455001</li>
            <li>公交：26、911、926、945、920、830、96、93、15、548等高安路；地铁十号线上海图书馆站、地铁一号线衡山路站</li>
          </ul>
          <div v-show="time">
            周一至周日   8:30--20:30
            国家法定假日   9:00--16:00
          </div>
          <div v-show="link">
            <a href="#">上海市中心图书馆</a>
            <a href="#">上海图书馆专业门户</a>
            <a href="#">上海行业情报服务网</a>
            <a href="#">情报服务平台</a>
          </div>
          <div v-show="about">上海图书馆成立于1952年，上海科学技术情报研究所成立于1958年。1995年10月，上海图书馆与上海科学技术情报研究所合并，成为综合性研究型公共图书馆和行业情报中心，同时也是全国文化信息资源共享工程上海市分中心、上海市中心图书馆总馆、上海市古籍保护中心和上海市软科学研究基地“前沿技术发展研究中心”
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="internet-contact">
          <li><i class="icon-phone"></i></li>
          <li><i class="icon-android"></i></li>
          <li><i class="icon-wechat"></i></li>
          <li><i class="icon-weibo"></i></li>
        </ul>
        <ul class="component-miniFooter">
          <li>版权所有©上海图书馆(上海科学技术情报研究所) 2016-2018</li>
          <li>沪ICP备050172015   网络视听许可证：0911606</li>
          <li>广播电视节目制作许可证：沪字第353号</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let stuatData = {
  info: true,
  time: false,
  link: false,
  about: false
}
export default {
  data () {
    return stuatData
  },
  methods: {
    changeFooter (useActive) {
      for (var i in stuatData) {
        stuatData[i] = false
      }
      // this.classList.add('active')
      stuatData[useActive] = true
    }
  }
}
</script>

<style scoped>
.active{
  color: white;
}
.padding{
  padding: 20px;
}
.footer ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.switch-info{
  height: 220px;
}
.title-tab li{
  color: hsla(0,0%,100%,.6);
  margin-top: 24px;
  cursor:pointer;
}
.container>div{
  box-sizing: border-box;
  vertical-align: top;
 }
.title-tab{
  float: left;
  padding: 13px 30px 13px 17px;
}
.tab-content{
  width: 80%;
  padding-top: 10px;
  margin-left: 156px;
  padding-left: 30px;
  color: white;
  text-align: left;
}
.tab-content a{
  color: white;
  text-decoration: none;
}
.tab-content ul,.tab-content div{
  padding-top: 25px;
}
.footer-bottom{
  border-top-color:rgba(255, 255, 255, 0.1);
  border-top-style:solid;
  border-top-width:1px;
}
.footer-bottom ul{
  font-family:iconfont;
  font-size:28px;
  margin: 10px 0px;
}
.internet-contact li{
  display: inline-block;
  color: #fff;
  font-size: 28px;
  width: 48px;
  height: 48px;
  margin: 0 24.5px;
  line-height: 48px;
  text-align: center;
}
.component-miniFooter{
  color:white;
}
.component-miniFooter li{
  font-size: 14px;
  margin-top: 3px;
}
.icon-phone:before{
  content: "\e610";
}
.icon-android:before{
  content: "\e60e";
}
.icon-wechat:before{
  content: "\e60f";
}
.icon-weibo:before{
  content: "\e60d";
}
</style>
