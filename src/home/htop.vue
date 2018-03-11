<template lang="html">
  <div :class="$style.panel">
    <a href="//luuck.github.io" target="_blank" :class="$style.content" v-for="item in items" >
        <img v-bind:src="item.imgurl" alt="">
        <div :class="$style.article">
          <span>{{item.title}}</span>
          <span id="divTyping">{{item.content}}</span>
        </div>
    </a>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.typing();
    },
    methods:{
     typing() {
         var that = this;
         var divTyping = document.getElementById('divTyping');
         if (that.info.num <= that.info.introduction.length) {
           divTyping.innerHTML = that.info.introduction.slice(0, that.info.num++) + '_';
           setTimeout(() => {
             that.typing();
           }, 500);
         }
         else{
           divTyping.innerHTML = that.info.introduction;//结束打字,移除 _ 光标
         }
     }
    },
    data() {
     return{
       info:{
         num:0,
         introduction: '哈啰~，欢迎来到这里，我叫luuck，前端菜鸟程序媛一枚~继续了解我，请往下~',
       },
       items: [{
         imgurl: './static/img/c-c3.jpg',
         title: 'Personal introduction',
         content: 'So-Called Social: Week of March 5'
       }]
     }
    }
  }
</script>

<style lang="scss" module>
  @import "../../static/css/layout.scss";

  .panel{
    height: 130px;
    @include flex(3,'',nowrap,center,center);
    .content{
      transition: opacity .3s;
      &:hover{
        opacity: .5;
      }
      img{
        width: 100px;
        height: 80px;
        float: left;
        margin-right: 20px;
      }
      .article{
        float: left;
        text-align: left;
        font-size: 12px;
        span{
          display: block;
          width: 230px;
          &:first-child{
            color: #999;
          }
          &:last-child{
            color: #000;
            width: 260px;
            font-size: 14px;
            margin-top: 10px;
            line-height: 20px;
          }
        }
      }
    }
  }
</style>
