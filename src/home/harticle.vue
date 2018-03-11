<template lang="html">
      <div :class="$style.panel">
        <ul :class="$style.container" >
          <li :class="$style.box" v-for="item in items">
            <img v-bind:src="item.imgurl" alt="海报排版">
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
        imgurl: './static/img/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      },{
        imgurl: './static/img/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      },{
        imgurl: './static/img/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      },{
        imgurl: './static/img/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      },{
        imgurl: './static/img/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      },{
        imgurl: 'https://ql91.github.io/FERoad/pic/worksbg/poster.png',
        url: 'http://ql91.github.io/FERoad/task/task06.html',
        title: '海报排版',
        p: '#html,#css'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  @import "../../static/css/element";
  .panel{
    /*@include flex(3,'',nowrap,center,center);*/
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      /*align-items: center;*/
      padding: 20px;
    }
    .box {
      width: 300px;
      height: 280px;
      box-sizing: border-box;
      border: 1px solid grey;
      margin: 20px;
      position: relative;
      overflow: hidden;

      li:last-child {
        line-height: 280px;
      }

      h3 {
        color: #1094E8;
        font-size: 20px;
        margin: 20px;
        font-family: "Microsoft Yahei";
      }

      p {
        font-size: 14px;
        color: grey;
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
