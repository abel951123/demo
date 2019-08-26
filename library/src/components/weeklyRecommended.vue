<template>
  <div>
    <div id="waterfall" class="waterfall">
      <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" :maxCols="3"  @click="clickFn" :height='height' >
        <div class="img-info" slot-scope="props">
        </div>
        <div slot="waterfall-over">加载完毕</div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'

export default {
  data () {
    return {
      imgsArr: [],
      group: 0,
      height: 600
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData () {
      axios.get('https://easy-mock.com/mock/5d3c4fa5f5031b727920284c/example/waterful?number=' + (this.group + 1))
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data.data.url)
          this.group++
          if (this.group < 7) {
            this.getData()
          }
        })
    },
    clickFn () {
      this.getData()
    },
    getScrolElem () {
      var getScrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        getScrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        getScrollTop = document.body.scrollTop
      }
      return getScrollTop
    },
    debounce (fn, wait) {
      var timeout = null
      return function () {
        if (timeout !== null) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(fn, wait)
      }
    },
    handleScroll () {
      var tagetTop = document.getElementById('waterfall').offsetTop
      var getScrollTop = this.getScrolElem()
      if (getScrollTop > tagetTop) {
        this.getData()
      }
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    window.addEventListener('scroll', this.debounce(this.handleScroll, 50), true)
  },
  updated () {
    // if (this.group > 6) {
    //   this.$nextTick(function () {
    //     console.log(this.group)
    //     console.log(this.imgsArr)
    //     var elem = document.getElementsByClassName('img-box')[this.group - 1]
    //     console.log(elem)
    //   })
    // }
    if (this.group > 6) {
      setTimeout(() => {
        var elem = document.getElementsByClassName('img-box')[this.group - 1]
        var nowHeight = parseInt(elem.style.top) + elem.offsetHeight
        if (nowHeight > this.height) {
          this.height = nowHeight
        }
      }, 50)
    }
  }
}
</script>

<style>
.vue-waterfall-easy-container .ball-beat+.vue-waterfall-easy-scroll{
  overflow-y: hidden!important;
}
</style>
