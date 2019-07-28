<template>
    <div>
      <div class="container">
        <div class="component-title">
          <span>活动中心</span>
        </div>
        <div class="activity-list-wrap">
          <div class="list-container">
            <ul>
              <li v-for="(item,index) in active" :key="index">
                <div class="active-block">
                  <div class="active-block-img">
                    <img :src="'../static/'+item.img" alt="">
                  </div>
                  <div class="active-block-content">
                    <p>{{item.title}}</p>
                    <div>
                      <p>{{item.adress}}</p>
                      <p>{{item.time}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="calendar">
            <div class="cal-wrapper">
              <div class="cal-header">
                <div class="l">
                  <div></div>
                </div>
                <div class="title">
                  {{time}}
                </div>
                <div class="r">
                  <div></div>
                </div>
              </div>
              <div class="cal-body"></div>
            </div>
          </div>
        </div>
        <div class="view-more">
          <a>查看更多</a>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    this.time = this.getTime()
    axios({
      method: 'get',
      url: 'https://easy-mock.com/mock/5d3c4fa5f5031b727920284c/example/test'
    }).then((res) => {
      console.log(res.data.active)
      this.active = res.data.active
    }).catch((err) => {
      console.log(err)
    })
  },
  data () {
    return {
      active: [],
      time: 0
    }
  },
  methods: {
    getTime () {
      let str = ''
      str += new Date().getFullYear() + '年'
      str += (new Date().getMonth() + 1) + '月'
      str += new Date().getDate() + '日'
      return str
    }
  }
}
</script>
<style scoped>
.container{
  padding: 0 5px;
}
.component-title{
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 5px;
}
.component-title span{
  display: inline-block;
  position: relative;
  color: #333;
  padding-right: 11px;
  padding-left: 11px;
  font-size: 22px;
}
.component-title span:before,.component-title span:after{
  content: "";
  position: absolute;
  top: 50%;
  width: 20px;
  height: 1px;
  background-color: #333;
  transform: translateY(-50%);
}
.component-title span:before{
  left: -20px;
}
.component-title span:after{
  right: -20px;
}
.list-container{
  display: inline-block;
  width: 65%;
  height: 333px;
}
.list-container ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.list-container li{
  border-bottom: gray solid 1px;
}
.list-container li:not(:first-child){
  margin-top: 30px;
}
.calendar{
  float: right;
  width: 344px;
  height: 333px;
  border: 1px solid #e0e0e0;
}
.cal-header{
  position: relative;
  width: 100%;
  height: 28px;
  font-size: 13px;
  background-color: #f3f4f6;
}
.active-block{
  display: inline-block;
  margin-bottom: 30px;

}
.active-block-img{
  width: 192px;
  height: 119px;
  overflow: hidden;
  float: left;
}
.active-block-img img{
  width: 100%;
  height: 100%;

}
.active-block-content{
  display: inline-block;
  position: relative;
  width: 424px;
  padding-left: 30px;
  font-size: 14px;
}
.active-block-content p{
  text-align: left;
}
.view-more a{
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 28px;
  font-size: 14px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #999;
  text-align: center;
}
.l,.r{
  float: left;
  line-height: 20px;
  width: 20%;
  height: 100%;
  cursor: pointer;
  user-select: none;
}
.l>div,.r>div{
  height: 100%;
  color: #adadad;
  left: 19px;
  line-height: 20px;
}
.l div:before{
  content: "";
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transform: rotate(-135deg);
}
.r div:before{
  content: "";
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transform: rotate(45deg);
}
.title{
  width: 60%;
  line-height: 28px;
  text-align: center;
  position: relative;
  float: left;
}
</style>
