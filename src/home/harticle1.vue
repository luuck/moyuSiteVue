<template lang="html">
  <div :class="$style.panel">
    <ul :class="$style.container" >
      <li :class="$style.box" v-for="item in items">
        <img v-bind:src="item.imgurl" >
        <a v-bind:href="item.url" target="_blank" class="box-a"><i class="fa fa-eye"></i></a>
        <h3>{{item.title}}</h3>
        <p>{{item.p}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [{
          imgurl: 'https://luuck.github.io/tool/breakballoon/img/bg-tip.png',
          url: 'https://luuck.github.io/tool/breakballoon/index.html',
          title: '击破气球小游戏',
          p: '#jquery插件,#面向对象'
        },{
          imgurl: 'http://luuck.github.io/tool/scrollbar/bg-tip.png',
          url: 'http://luuck.github.io/tool/scrollbar/1.0.0/scrollbar.html',
          title: '美化滚动条，局部无限滚动',
          p: '#组件,#依赖jquery.nicescroll.js插件'
        },{
          imgurl: 'https://luuck.github.io/tool/siderbar/bg-tip.png',
          url: 'https://luuck.github.io/tool/siderbar/siderbar-v1.3.0.html',
          title: '浮窗',
          p: '#兼容ie6+以及各主流浏览器'
        },{
          imgurl: 'https://luuck.github.io/tool/numscroll/images/bg-tip.png',
          url: 'https://luuck.github.io/tool/numscroll/index.html',
          title: '数字滚动',
          p: '#js,#html,#css'
        },{
          imgurl: 'https://luuck.github.io/EBeauty/pic/worksbg/eBeauty.png',
          url: 'https://luuck.github.io/EBeauty/EBeauty/index.html',
          title: '易优美webApp',
          p: '#我的收藏,#我的订单,#第三方支付'
        },{
          imgurl: './static/img/poster.png',
          url: 'javascript:;',
          title: '完善中',
          p: '....'
        }]
        /*items: [{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '海报排版',
          p: '#html,#css'
        },{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '海报排版',
          p: '#html,#css'
        },{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '海报排版',
          p: '#html,#css'
        },{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '海报排版',
          p: '#html,#css'
        },{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '回到顶部',
          p: '#html,#css'
        },{
          imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
          url: 'http://ql91.github.io/FERoad/task/task06.html',
          title: '海报排版',
          p: '#html,#css'
        }]*/
      }
    }
  }
</script>

<style lang="scss" module>
  .panel{
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      /*align-items: center;*/
      padding: 20px;
      background-color: #F7F4F4;
    }
    .box {
      width: 300px;
      height: 280px;
      box-sizing: border-box;
      background-color: #fff;
      /*border: 1px solid grey;*/
      margin: 20px;
      position: relative;
      overflow: hidden;
      /*box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);*/
      box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);

      img{
        width: 300px;
        height: 170px;
      }

      li:last-child {
        line-height: 280px;
      }

      h3 {
        color: #999;
        font-size: 20px;
        margin: 20px;
        font-family: "Microsoft Yahei";
      }

      p {
        font-size: 14px;
        color: #0a0a0a;
        /*color: grey;*/
      }

      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 170px;
        color: #fff;
        text-align: center;
        opacity: 0;
        i{
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          font-size: 50px;
          width: 50px;
          height: 50px;
          opacity: 0;
          -webkit-transform: scale(4);
          transform: scale(4);
          -webkit-transition: .2s;
          transition: .2s;
          -webkit-transition-delay: .15s;
          transition-delay: .15s;
        }
      }
      a:hover {
        opacity: 1;
        background: rgba(0, 0, 0, .7);
        transition: .15s;
        -webkit-transition: .15s;
        i{
          transform: scale(.8);
          opacity: 1;
        }
      }
    }
  }

</style>
