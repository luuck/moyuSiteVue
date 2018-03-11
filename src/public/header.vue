<template>
  <div :class="$style.header">
    <transition name="slide">
      <div :class="$style.overlayBg" id="overlayBg" v-if="isshow" enter-active-class="fadeInDown"></div>
    </transition>

    <div :class="$style.headerCon">
      <div :class="$style.headerConBox">
        <i></i>
        <a href="//luuck.github.io" target="_blank">
          Lu'Blog
        </a>
        <div :class="$style.nav">
          <span id="box1" v-on:mouseenter="toggle" v-on:mouseleave="toggleLeave">Skill</span>
          <span id="box2" v-on:mouseenter="toggle1" v-on:mouseleave="toggle1Leave">Experience</span>
          <!--<span id="box2" v-on:mouseenter="toggle1" v-on:mouseleave="toggle1Leave">Experience</span>-->
          <!--<span>Hobby</span>-->
        </div>

        <div :class="$style.item">
          <transition name="slide2">
          <div :class="$style.item1" id="item1" v-on:mouseenter="toggle" v-on:mouseleave="toggleLeave" v-if="isshow2">
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>jQuery</span>
            <span>面向对象</span>
            <span>模块化</span>
            <span>Git</span>
            <span>Gulp</span>
            <span>Sass</span>
            <span>Vue(学习实战中)</span>
            <span>Es6(学习实战中）</span>
          </div>
          </transition>
          <transition name="slide3">
          <div :class="$style.item2" id="item2" v-on:mouseenter="toggle1" v-on:mouseleave="toggle1Leave" v-if="isshow3">
            <p>2016年7月-至今：畅唐网络<br/><span>前端开发工程师</span></p>
          </div>
          </transition>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      toggle(event){
        this.isshow = true;
        this.isshow2 = true;
        this.isshow3 = false;
        $('#box1').css('color','#EF807C');
        $('#box2').css('color','#000');
      },
      toggleLeave(event){
        this.isshow = false;
        this.isshow2 = false;
        $('#box1').css('color','#000');
      },
      toggle1Leave(event){
        this.isshow = false;
        this.isshow3 = false;
        $('#box2').css('color','#000');
      },
      toggle1(event){
        this.isshow = true;
        this.isshow3 = true;
        this.isshow2 = false;
        $('#box1').css('color','#000');
        $('#box2').css('color','#EF807C');
      }
    },
    data(){
      return {
        isshow: false,
        isshow2: false,
        isshow3: false
      }
    }
  }
</script>
<style lang="scss" module>
  @import "../../static/css/layout";


  $h-height: 80px; // 头部高度
  $h-width: 1020px; // 头部中间区域的宽度
  $i-height: 36px; // logo的宽
  $i-width: 36px; // logo的高



  .header {
    border-bottom: 1px solid #e5e5e5;
    height: $h-height;
    line-height: $h-height;
    color: #000;
    font-weight: 700;

    .overlayBg{
      display: none;
      position: fixed;
      z-index: 80;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,.8);
    }

    .headerCon {
      /*position: fixed;*/
      z-index: 101;
      color: #000;
      width: 100%;
      height: 100%;
      /*margin: 0 auto;*/
      background-color: #fff;
      font-size: 16px;
      position: relative;
      font-family: "Adobe Clean", sans-serif;

      .headerConBox{
        display: flex;
        width: $h-width;
        max-width: 1020px;
        margin: 0 auto;
        position: relative;
        a{
          color: #000;
          position: absolute;
          left: 32px;
          top:0;
          width: 72px;
          height: $h-height;
          transition: all .8s ease-in-out;
          -webkit-transition: all .8s ease-in-out;
          text-decoration: none;
          font-weight: 600;
          &:hover {
            color: #EF807C;
            padding-left: 16px;
          }
        }
        i {
          background: url(../../static/img/favicon.jpg);
          display: inline-block;
          width: $i-width;
          height: $i-height;
          margin-top: $h-height / 2  - $i-height / 2;
        }
        .nav {
          flex: 1;
          transition: background-color .3s;
          @include flex(4, '', nowrap, flex-end, center);
          span {
            font-weight: 600;
            width: 100px;
            text-decoration: none;
            position: relative;
            cursor: pointer;
            /*@include flex(4, '', nowrap, flex-end, center);*/
            transition: all .3s;
            &:hover {
              background-color: rgba(237, 237, 237, .3);
              color: #EF807C;
            }
            &:before{
              content: '';
              display: block;
              position: absolute;
              width: 0;
              height: 0;
              border: 3px solid transparent;
              border-top-color: #999;
              transition: .4s cubic-bezier(.6,0,.41,1);
              transition-property: opacity,-webkit-transform;
              transition-property: transform,opacity;
              transition-property: transform,opacity,-webkit-transform;
              top: calc(50% + 17px);
              left: calc(50% - 1.5px);
            }
          }
        }

        .item{
          z-index: 20;
          position: absolute;
          top:$h-height;
          right: 0px;
          height: 100%;
          padding-top: 80px;
          /*background-color: red;*/

          &>div{
            background-color: #fff;
            border-top: 1px solid #e5e5e5;
            position: absolute;
            top:0;
            right: 0;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
          }

          .item1{
            /*display: none;*/
            width: 280px;
            padding: 20px 10px;
            span {
              display: inline-block;
              height: 30px;
              line-height: 30px;
              padding: 4px;
              position: relative;
              z-index: 1;
              /*background: #fff;*/
              overflow: hidden;
              background-color: #F7F4F4;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
              font-family: source-code-pro,sans-serif;
              margin: 4px;
            }
          }

          .item2{
            /*display: none;*/
            width: 300px;
            height: 102px;
            font-size: 14px;
            padding-top: 20px;
            p{
              /*border-bottom: 1px dashed #eaeaea;*/
              padding-bottom: 10px;
              line-height: 30px;
              span{
                font-size: 14px;
              }
            }
          }

        }
      }


    }
  }

  .slide-enter-active {
    transition: all .3s ease;
    opacity: 1;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    opacity: 1;
  }
  .slide-enter,.slide-leave-active {
    opacity: 0;
  }

</style>
